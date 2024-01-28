/**
 * Component for Step 1 of the LifeChart form.
 * This component handles basic information input such as salutation, first name, last name, date of birth, age, and expected age.
 *
 * @component
 * @example
 * <Step1></Step1>
 */
<script>
import { ref } from 'vue';
import { useDate } from "vuetify";
import { reactive, toRaw } from 'vue';
import { user } from '../../services/store';
import { ffp } from '../../services/store';
export default {
  name: 'Step1',
  data(){
    return {
      salutation: user.salutation,
      firstName: reactive(user.firstName),
      lastName: ref(''),
      selectedDate: ref(new Date()),
      showDatePicker: false,
      firstNameRules: [
        v => !!v || 'First name is required',
      ],
      lastNameRules: [
        v => !!v || 'Last name is required',
      ],
      expectedAge: null,
      expectedFFP: null,
    }
  },
  computed: {
    formattedDate() {
      return useDate().format(this.selectedDate, 'DD MMMM YYYY')
    },
    age() {
      return useDate().format(new Date(), 'year') - useDate().format(this.selectedDate, 'year')
    },
  },
  methods:{
    test(){
      this.showDatePicker = true
  },
    modifyData(){ 
      user.salutation = this.salutation
      user.firstName = this.firstName
      user.lastName = this.lastName
      user.dateOfBirth = this.selectedDate
      user.age = this.age
      user.expectedAge = this.expectedAge
      user.isSet = true
      ffp.expected = parseInt(this.expectedFFP)
      localStorage.removeItem("user")
      localStorage.setItem("user", JSON.stringify(toRaw(user)))
      console.log(user)
    }
  },
}
</script>

<template>
  <div @v-on:saveData="modifyData"></div>
  <v-container class="text-center "  >
        <h2 class=" py-4 text-h2"> Basic information</h2>
        <v-sheet width="500" class="mx-auto px-3 py-3">
              <v-select
                  v-model="salutation"
                  :items= "['Mr', 'Mrs', 'Ms',' ']"
                  label="Salutation"
              ></v-select>
          <v-form fast-fail @submit.prevent>
            <v-text-field
                v-model="firstName"
                label="First name"
                :rules="firstNameRules"
            ></v-text-field>

            <v-text-field
                v-model="lastName"
                label="Last name"
                :rules="lastNameRules"
            ></v-text-field>
            <v-text-field label="Date of birth" v-model="formattedDate" @click="test" ></v-text-field>
            <v-row justify="space-around" class="d-flex">
            <v-date-picker color="primary" format="MMMM DD, YYYY"  v-show="showDatePicker" v-model="selectedDate" @mouseleave="showDatePicker = false"></v-date-picker>
            </v-row>
            <v-text-field v-model="age" readonly="true" label="age" class="mt-5" ></v-text-field>
            <v-text-field v-model="expectedAge" label="Expected age"></v-text-field>
            <v-text-field v-model="expectedFFP" label="your expected freedom financial age"></v-text-field>
            <v-btn type="submit" block @click="modifyData" class="mt-2">Submit</v-btn>
          </v-form>
        </v-sheet>

  </v-container>
</template>

<style scoped>

</style>