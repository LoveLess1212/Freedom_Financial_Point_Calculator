<script>
import CalculateFreedomPoint from "../../services/CalculateFreedomPoint";

export default {
  name: "LifeChart",
  props: {
    riseinmoney: {
      type: Number,
      required: true
    },
    inflation: {
      type: Number,
      required: true
    }
  },
  computed: {
    Saving() {
      // Calculate Saving logic here
      return CalculateFreedomPoint.calculateSaving(this.riseinmoney, this.inflation);
    },
    FreedomPoint() {
      // Calculate FreedomPoint logic here
      return CalculateFreedomPoint.calculateFreedomPoint(this.riseinmoney, this.inflation);
    },
    MoneyNeeded() {
      // Calculate MoneyNeeded logic here
      return CalculateFreedomPoint.calculateMoneyNeeded(this.riseinmoney, this.inflation);
    }
  }
}
</script>

<template>

</template>

<style scoped>

</style>