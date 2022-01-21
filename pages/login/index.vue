<template  lang="pug">
  main
    h1 Daniel
    NuxtLink(to="/") Voltar
</template>

<script>
export default {
  data() {
    return {
      email: "",
      senha: "",
      tentative:3,
      showPassword: false,
      recaptchaToken: this.recaptchaToken,
      valid: false,
      step:1,
      nameError:true,
      errors: [],
      rules: {
        required: (fieldname) => (v) => !!v || `Por favor, insira o ${fieldname}.`,
        isValidEmail: (v) => isValidEmail(v) || 'E-mail inválido. Por favor, verifique o e-mail.',
        isExist: (p) => () => isExist(p) || 'E-mail ou senha incorreta. Por favor, insira os dados corretamente.'
      }
    }
  },
}
</script>

<style>
  .qt-toast--info-dark{
    display: none !important;
  }
 .v-application, .v-application [class*=text-]{
    font-family: "Roboto" !important;
  }
  .v-input--dense .v-label{
    color: black !important;
  }
  .v-input--dense fieldset{
    border: 1px solid rgba(0, 0, 0, .1);
  }
</style>
<style scoped>
.btnWhite{
  background-color: white !important;
}
.btnBack{
  margin-top: 110px;
  text-align: center;
}
.btnBack button{
  border: 1px solid rgba(0, 0, 0, .1);
}
.titleErro{
  font-family: Roboto;
  width: 346px;
}
.titleErro h1{
  line-height: 1;
  margin-bottom: 18px;
}

.withOutRec{
  display: none;
}

.withRec{
  display: block;
}

.rememberPass{
  padding: 0px;
  padding-right: 13px;
  margin-top: -10px;
}

.form-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.form {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 600px;
    width: 100%;
    z-index: 1;
    padding: 72px 100px;
    margin: auto;

}

.form--all_screen{
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    align-items: center;

}

.logo {
  margin-bottom: 40px;
  cursor: pointer;
}

.content {
  flex: 1 1 0%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
</style>
