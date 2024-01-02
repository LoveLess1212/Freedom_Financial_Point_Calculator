<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="text-h3">Freedom Point calculator</h3>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="age" label="Plan Begin" disabled></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="expectedAge" label="Age End" disabled></v-text-field>
              </v-col>
            </v-row>
            <v-text-field v-model="Inflation" label="Inflation"></v-text-field>
            <v-text-field v-model="RiseInValue" label="Expected rising"></v-text-field>
            <v-row>
                    <v-container class="text-center ">
                      <v-btn type="submit" block @click="modifyData" class="mt-2">Submit</v-btn>
                    </v-container>
                  </v-row>
          </v-col>

          <v-col cols="6">
            <v-row>
              <LifeChart :inflation="Inflation" :riseinmoney="RiseInValue"/>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import {user} from "../../services/store.js";
import LifeChart from "../LifeChartStep/LifeChart.vue";
export default {
  components: {LifeChart},
  methods: {
    modifyData() {
      user.inflation = this.Inflation;
      user.riseInValue = this.RiseInValue;
    }
  },
  data() {
    return {
    Inflation: 0,
    RiseInValue: 0
    }
  },
  computed: {
    age() {
      return user.age;
    },
    expectedAge() {
      
      return user.expectedAge;
    }
  }
  // Component logic goes here
}
</script>