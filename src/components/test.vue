<template>
  <v-container style="height: 60vh;"  class=" align-center justify-center pa-15">
    <div class="pa-15 ma-15">
    <h1 class="text-h1 text-center d-block pa-5">You are in group {{ this.grname }}</h1>
    <h2 class="text-h2 text-center d-block pa-5">Your estimation is {{ Math.abs(expected-actual)}} years differ than your expected</h2>
    <h4 class="text-h4 text-center d-block pa-5">Which is {{ percent }}% {{ stat }} than others in your group</h4>
  </div>
  </v-container>
</template>

<script >
import { calulatedGroup } from "../services/store.js";
import { ffp } from "../services/store.js";
export default {
  data() {
    return {
      grname: "good starter",
      percent: 0,
      better: true,
      stat: "better"
    }
  },
  computed: {
    k_group() {
      let k_group = calulatedGroup.data;
      console.log(k_group)
      console.log("running grp2name")
      if (k_group === 1) {
        this.grname = "good starter";
      } else if (k_group === 2) {
        this.grname = "smart saver";
      } else if (k_group === 3) {
        this.grname = "good saver";
      }
      else {
        this.grname = "zero that not infer the group for you due to lack of data or something."
      }
    },
    expected() {
      return ffp.expected;
    },
    actual() {
      return ffp.actual;
    }
  },
  methods: {

    modifyData() {
      console.log(calulatedGroup)
      this.k_group
    },
    compare() {
      if (this.expected > this.actual) {
        this.better = false
        stat = "better"
      } else if (this.expected < this.actual) {
        this.better = true
        stat = "worse"
      } else {
        stat = "equal"
      }
    },
  }

  // Component logic goes here
}
</script>
<!-- Bây giờ m add cái API xong, nó return ra "index" chẳng hạn, m cho cái k_group=index là nó sẽ tự in ra-->
