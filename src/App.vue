<template>
  <v-app >
<!--    <v-layout ref="app" class="rounded rounded-md">-->
      <NavBar />
      <v-main >
        <MainStep />
<!--        <test/>-->
      </v-main>
      <Footer/>

<!--    </v-layout>-->
  </v-app>

</template>

<script>
import Capital from './components/Capital.vue'
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import MainStep from "./components/MainStep.vue";
import Test from "./components/test.vue";

export default {
  name: 'App',

  components: {
    Test,
    MainStep,
    Footer,
    NavBar,
    Capital,

  },
  data: () => ({

  }),
}
</script>
<style>
</style>
