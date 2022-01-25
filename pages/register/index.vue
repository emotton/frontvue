<template>
  <v-app>
    <v-main>
      <v-container>

        <v-row
          no-gutters
        >
          <v-col>
            <h1>Seja bem-vindo!</h1>
          </v-col>
        </v-row>
        <v-row
          no-gutters
        >
          <v-col>
            <p>Cadastre-se para se conectar ao mundo por API.</p>
          </v-col>
        </v-row>

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >

        <v-row
          no-gutters
        >
          <v-col>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row
          no-gutters
        >
          <v-col>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row
          no-gutters
        >
          <v-col>
            <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="Item"
              required
            ></v-select>
          </v-col>
        </v-row>

        <v-row
          no-gutters
        >
          <v-col>
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row
          no-gutters
        >
          <v-col>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Validate
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Reset Form
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="warning"
              @click="resetValidation"
            >
              Reset Validation
            </v-btn>
          </v-col>
        </v-row>

        </v-form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
</script>

<style scoped>
</style>
