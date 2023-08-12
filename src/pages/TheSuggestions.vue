<template>
  <div>
    <button @click="addItem">Add Item</button>
    <table>
      <tr v-for="(row, rowIndex) in multiDimArray" :key="rowIndex">
        <td v-for="(item, colIndex) in row" :key="colIndex">{{ item }}</td>
      </tr>
    </table>
  </div>

  {{multiDimArray[1][0]}}
</template>

<script>
export default {
  data() {
    return {
      multiDimArray: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
    };
  },
  methods: {
    addItem() {
      // Let's add a new row with random values
      const newRow = [];
      for (let i = 0; i < this.multiDimArray[0].length; i++) {
        newRow.push(Math.floor(Math.random() * 10));
      }
      this.multiDimArray.push(newRow);
    }
  }
};
</script>
