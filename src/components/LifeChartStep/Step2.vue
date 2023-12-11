<script>
export default {
  name: "Step2",
  data(){
    return{

    }
  }
}
</script>

<template>

  <v-container>
    <v-row>
        <h2 class="text-h2">Balance Sheet</h2>
    </v-row>
    <v-row>
      <v-col cols="5">
        <v-card>
          <v-card-title>
            <h5 class="text-h5">Assets</h5>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="Cash" label="Cash" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="Investment" label="Investment" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="Real_Estate" label="Real Estate" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Business" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Other" type="number"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-title>
            <h5 class="text-h5">Liabilities</h5>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="Mortgage" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Student Loan" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Credit Card" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Other" type="number"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<style scoped>

</style>