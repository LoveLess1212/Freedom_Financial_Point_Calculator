<script>
import test from "./test.vue";
import Step1 from "./LifeChartStep/Step 1.vue";
import Step2 from "./LifeChartStep/Step2.vue";

export default {
  name: 'MainStep',

  components: {
    Step2,
    Step1,
    test,
  },
  data() {
    return {
      StepState: 0,
    }
  },
  computed: {
    disabled() {
      return this.StepState === 1 ? 'prev' : this.StepState === 3 ? 'next' : undefined
    }
  }
}

</script>

<template>
  <v-stepper v-model="StepState" editable>
    <template v-slot:default="{ prev, next }">
      <v-stepper-header>
        <v-stepper-item value="1" title="Basic Information"></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item value="2" title="Balance Sheet"></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item value="3" title="Life Period"></v-stepper-item>
        <v-divider></v-divider>
        <v-stepper-item value="4" title="Freedom Point"></v-stepper-item>
      </v-stepper-header>

      <v-stepper-window>
        <v-stepper-window-item value="1" class="bg-amber-lighten-5">
          <Step1/>
        </v-stepper-window-item>
        <v-stepper-window-item value="2">
          <Step2/>
        </v-stepper-window-item>
        <v-stepper-window-item value="3">
          <test/>
        </v-stepper-window-item>
      </v-stepper-window>
      <v-stepper-actions class="bg-amber-lighten-4 pt-2" color="amber-darken-2"
          :disabled="disabled"
                         @click:prev="prev"
                         @click:next="next">
      </v-stepper-actions>
    </template>
  </v-stepper>
</template>

<style scoped>

</style>