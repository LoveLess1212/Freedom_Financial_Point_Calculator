<template>
  <v-container class="d-flex align-center justify-center
" style="height: 60vh;">
    
<h1 class="text-h1 text-center ">You are in group {{ grname }}</h1>

</v-container>
</template>

<script >
export default {
    data() {
    return {
      k_group: 1,
      grname: "Good starter"
    }
  },
  computed: {

  },
  methods: {
    /**
     * Returns the group name based on the value of k_group.
     * @returns {string} The group name.
     */
    group2name() {
      if (this.k_group == 1) {
        return grname = "Good starter";
      } else if (this.k_group == 2) {
        return this.grname = "Smart saver";
      } else if (this.k_group == 3) {
        return this.grname = "Good saver";
      }
    }
  }
// Component logic goes here
}
</script>
<!-- Bây giờ m add cái API xong, nó return ra "index" chẳng hạn, m cho cái k_group=index là nó sẽ tự in ra-->
