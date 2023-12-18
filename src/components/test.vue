<template>
  <div>
    <h1>Data from MongoDB</h1>
    
    <ul>
      <li v-for="item in items" :key="item._id">
        {{ item.salution }} - {{ item.FirstName }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const url = 'http://localhost:5000/getData'; // Local server URL
      axios.get(url)
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>