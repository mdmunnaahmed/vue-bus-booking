<template>
  <div>
    <div v-for="(object, index) in arrayOfObjects" :key="object.id">
      Object {{ object.id }} values: {{ getValuesArray(index) }}
    </div>

  </div>
</template>


<script>

export default {
  data() {
    return {
      arrayOfObjects: [
        { id: 1, values: [1, 2, 3] },
        { id: 2, values: [4, 5, 6] },
        { id: 3, values: [7, 8, 9] },
      ],
    };
  },

  computed: {
    getValuesArray() {
      return (index) => {
        if (this.arrayOfObjects[index]) {
          return this.arrayOfObjects[index].values;
        }
        return [];
      };
    },
  },
};
</script>
