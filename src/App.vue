<template>
  <v-app>
    <v-main>
      <Capital/>
    </v-main>
  </v-app>
</template>

<script>
import Capital from './components/Capital.vue'
export default {
  name: 'App',

  components: {
    Capital,
  },

  data: () => ({
    //
  }),
}
</script>
