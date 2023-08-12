<template>
    <div>
      <h2>Next Page</h2>
      <p>Received Data: {{ receivedData }}</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      receivedData() {
        return JSON.parse(this.$route.params.data || '{}');
      }
    }
  };
  </script>
  