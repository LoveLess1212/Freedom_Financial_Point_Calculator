<template>
<!--  list all the data out-->
  <ul>
    <li>First name from Watch: {{user.firstName }}</li> 
    <li>Last name from Watch: {{ user.lastName }}</li>
    <li>Age from Watch: {{ user.age }}</li>
  </ul>

</template>

<script>
import * as store from "../services/store.js";
export default {
  name: 'LifeChart',
  data(){
    return{
        user: user
    }
  },
  methods:{
    test(){
      console.log(this.chartData)
    }
  },
  mounted() {
    console.log(this.chartData)
  },

}
</script>