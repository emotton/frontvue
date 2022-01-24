<template>
  <v-app class="form-container">
    <v-main class="d-flex align-center justify-center">
      <v-container class="form-white white">
        <v-row no-gutters>
          <v-col
            cols="12"
            class="d-flex justify-center"
          >
            <v-img
              class="logo"
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="32"
              max-width="120"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col
            cols="12"
            class="d-flex justify-center"
          >
            <h2 class="text-bemvindo font-weight-medium grey--text text--darken-4">Bem Vindo!</h2>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col
            cols="12"
            class="d-flex justify-center"
          >
            <p class="text-info font-weight-normal grey--text text--darken-3">Acesse a sua conta e conecte-se ao mundo das APIs.</p>
          </v-col>
        </v-row>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-row no-gutters>
            <v-col
              cols="12"
            >

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                  dense
                ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col
              cols="12"
            >
                <v-text-field
                  v-model="senha"
                  :rules="senhaRules"
                  label="Senha"
                  required
                  outlined
                  dense
                ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col
              cols="12"
              class="mb-5 d-flex justify-end"
            >
                <a href="#">Esqueci minha senha</a>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col
              cols="12"
            >
                <v-btn
                  block
                  color="primary"
                  elevation="2"
                >Entrar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-main>
  </v-app>
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
  methods:{
    handleEntry(){
      alert("Entrar no login")
    }
  }
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
