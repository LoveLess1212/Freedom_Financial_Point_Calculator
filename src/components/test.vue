<template>
  <v-container class="d-flex align-center justify-center
" style="height: 60vh;">
    
<h1 class="text-h1 text-center ">You are in group {{ this.grname }}</h1>
<v-container class="text-center ">
                <v-btn type="submit" block @click="modifyData" class="mt-2">Submit</v-btn>
              </v-container>
</v-container>
</template>

<script >
import { calulatedGroup  } from "../services/store.js";

export default {
    data() {
    return {
      grname: "No Data"
    }
  },
  computed: {
    k_group() {
      return calulatedGroup.data;
    }
  },
  methods: {
    /**
     * Returns the group name based on the value of k_group.
     * @returns {string} The group name.
     */
     group2name() {
      if (this.k_group === 1) {
        this.grname = "good starter";
      } else if (this.k_group === 2) {
        this.grname =  "smart saver";
      } else if (this.k_group=== 3) {
        this.grname = "good saver";
      }
      else{
        this.grname = "zero that not infer the group for you due to lack of data or something."
      }
    },
    modifyData(){
    console.log(this.k_group)
  }
  }
  
// Component logic goes here
}
</script>
<!-- Bây giờ m add cái API xong, nó return ra "index" chẳng hạn, m cho cái k_group=index là nó sẽ tự in ra-->
