<template lang="pug">
  .form-container
    .form-white
      .form-logo
        img.logo(
          height="32"
          width="120px"
          src="https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2022%2F01%2F8312a28e877edc8b64d95f5cefa5f42a.png?alt=media&token=cf507e4a-a883-40e0-be84-22e886b39c5c"
        )
      v-row( justify="center" align="center")
        v-col( cols="12" sm="8" md="6")
          v-card( class="logo py-4 d-flex justify-center")
            v-card-title( class="headline")
              p.text-h2 Bem-vindo!
              p.font-weight-black Black text.
            v-card-actions
            v-spacer
            NuxtLink(to="/") Voltar

</template>

<script>
function isValidEmail(email) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

function isExist(route){
   if(route.query.emailNotExist){
     return false;
   }
   return true;
}

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

<style scoped>
  .form-container{
    display: flex;
    width: 100%;
    min-height: 100vh;
    background: #E5E5E5;
    justify-content: center;
  }

  .form-white{
    align-self: center;
    width: 600px;
    height: 768px;
    background: #FFFFFF;
    padding-top:80px;
    padding-left:103px;
    padding-right:103px;
  }

  .form-logo{
    display:flex;
    justify-content:center;
    margin-bottom:72px;
  }

  .content{

  }
</style>
