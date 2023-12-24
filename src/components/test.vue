<template>
<!--  list all the data out-->
  <ul>
    <li>First name from Watch: {{user.firstName }}</li>
    <li>Last name from Watch: {{ user.lastName }}</li>
    <li>Age from Watch: {{ user.age }}</li>
  </ul>

</template>
<script>
import {user} from "../services/store.js";
export default {
  name: 'LifeChart',
  data(){
    return{
      user: user
    }
  },
  // watch:{
  //   'store.user'(newVal){
  //       this.data = newVal
  //     }
  // }
}
</script>