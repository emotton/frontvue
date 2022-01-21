<template  lang="pug">
 #indexPage
   v-row( justify="center" align="center")
      v-col( cols="12" sm="8" md="6")
        v-card( class="logo py-4 d-flex justify-center")
          v-card-title( class="headline")
            h1 Teste
          v-card-actions
          v-spacer
          menu
   
</template>


<script>
import menu from './menu/index.vue'

export default {
  name: 'IndexPage',
  components:{
    menu
  }
}
</script>
