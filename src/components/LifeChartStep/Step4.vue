<template>
  <div ></div>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="text-h3">Freedom Point calculator</h3>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="3">
            <v-row>
              <v-col md="6">
                <v-text-field v-model="age" label="Plan Begin" disabled></v-text-field>
              </v-col>
              <v-col md="6">
                <v-text-field v-model="expectedAge" label="Age End" disabled></v-text-field>
              </v-col>
            </v-row>
            <v-text-field v-model="Inflation" label="Inflation"></v-text-field>
            <v-text-field v-model="RiseInValue" label="Expected rising"></v-text-field>
            <v-text-field v-model="FFP" readonly label="Your Age of having financial freedom"></v-text-field>
            <v-row>
              <v-container class="text-center ">
                <v-btn type="submit" block @click="modifyData" class="mt-2">Submit</v-btn>
              </v-container>
            </v-row>


          </v-col>

          <v-col cols="9">
            <v-row>
              <LifeChart  @set-freedom-point="setFreedomPoint" :inflation="Inflation" :riseinmoney="RiseInValue" />
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container> 
</template>

<script>
import {user, asset, income, calulatedGroup  } from "../../services/store.js";
import LifeChart from "../LifeChartStep/LifeChart.vue";
import axios from 'axios';
import { BASE_URL } from "../../setting"
import { toRaw } from "vue"; 
import { ffp } from "../../services/store.js";
export default {
  components: { LifeChart },
  methods: {
    modifyData() {
      user.inflation = parseInt(this.Inflation);
      user.riseInValue = parseInt(this.RiseInValue);
      ffp.actual = parseInt(this.FFP);
      axios.post(BASE_URL + "/postData", {
        User: toRaw(user),
        Balance: toRaw(asset),
        Stage: toRaw(income) 
      })
      .then(response => {
        user.id = response.data
        localStorage.setItem("user", JSON.stringify(toRaw(user)))
        axios.get(BASE_URL+"/calculateGroup/" + user.id).then(res =>{
          console.log(res.data)
          calulatedGroup.data = res.data
        })
        // Handle the successful response here
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error here
        console.error(error);
      })
    },
    setFreedomPoint(value) {
      this.FFP = value;
    }
  },
  data() {
    return {
      Inflation: 0,
      RiseInValue: 0,
      FFP: 0, 
    }
  },
  computed: {
    age() {
      return user.age;
    },
    expectedAge() {

      return user.expectedAge;
    },
    
  }
  // Component logic goes here
}
</script>