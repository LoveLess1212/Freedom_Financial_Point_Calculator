<template>
  <v-app>
    <NavBar/>
    <v-main>
      <Capital/>
    </v-main>
  </v-app>
</template>

<script>
import Capital from './components/Capital.vue'
import NavBar from "./components/NavBar.vue";
export default {
  name: 'App',

  components: {
    NavBar,
    Capital,
  },

  data: () => ({
    //
  }),
}
</script>
