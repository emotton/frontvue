<template>
  <v-app class="form-container">
    <v-main class="d-flex align-center justify-center">
      <v-container class="form-white white">
        <v-img
          class="logo"
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="80"
          max-width="148"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <h2 class="text-bemvindo font-weight-medium grey--text text--darken-4">Bem Vindo!</h2>
        <p class="text-info font-weight-normal grey--text text--darken-3">Acesse a sua conta e conecte-se ao mundo das APIs.</p>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="senha"
            :rules="senhaRules"
            label="Senha"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Entrar
          </v-btn>
        </v-form>
      </v-container>
    </v-main>
  </v-app>
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
    background: #E5E5E5;
  }

  .form-white{
    align-self: center;
    width: 600px;
    height: 100vh;
    padding-top:80px;
    padding-left:103px;
    padding-right:103px;
  }

  .logo{
    display:flex;
    justify-content:center;
    margin-bottom:72px;
  }

  .text-bemvindo{
    font-size:2rem;
  }

  .text-info{
    margin-bottom:20px;
  }
</style>
