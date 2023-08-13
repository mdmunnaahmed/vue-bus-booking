<template>
  <div>
    <input v-model="inputValue" @input="updateSuggestions" />
    <ul v-if="showSuggestions" class="suggestions">
      <li v-for="(suggestion, index) in filteredSuggestions" :key="index" @click="selectSuggestion(suggestion)">
        {{ suggestion.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      suggestions: [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Cherry' },
        // ... other objects
      ],
      showSuggestions: false,
    };
  },
  computed: {
    filteredSuggestions() {
      return this.suggestions.filter(suggestion =>
        suggestion.name.toLowerCase().includes(this.inputValue.toLowerCase())
      );
    },
  },
  methods: {
    updateSuggestions() {
      this.showSuggestions = this.inputValue.length > 0;
    },
    selectSuggestion(suggestion) {
      this.inputValue = suggestion.name;
      this.showSuggestions = false;
    },
  },
};
</script>

<style>
.suggestions {
  list-style-type: none;
  padding: 0;
  border: 1px solid #ccc;
}
.suggestions li {
  padding: 8px;
  cursor: pointer;
}
</style>
