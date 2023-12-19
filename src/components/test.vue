<template>
<!--  list all the data out-->
  <ul>
    <li>Salutation: {{salutation}}</li>
    <li>First Name: {{firstName}}</li>
    <li>Last Name: {{lastName}}</li>
    <li>Age: {{Age}}</li>
    <li>Expected Age: {{expectedAge}}</li>
  </ul>

</template>
<script>
import {store} from "../services/store.js";
export default {
  name: 'LifeChart',
  data(){
    return{
      salutation: store.user.salutation,
      firstName: store.user.firstName,
      lastName: store.user.lastName,
      Age: store.user.age,
      expectedAge: store.user.expectedAge,
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