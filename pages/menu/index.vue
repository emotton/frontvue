<template lang="pug">
    div( v-for="i in linkes" :key="i.name")
         NuxtLink(:to="i.redirect") {{i.name}}
</template>

<script>
import useVuelidate from '@vuelidate/core'
import validations from './validations/login'
import rotas from './routes'

export default {
    setup () {
        return { v$: useVuelidate() }
    },
    validations () {
        return validations
    },
    data () {
        return {
            linkes : {...rotas}
        }
     }
}
</script>