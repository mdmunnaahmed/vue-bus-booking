<template>
    <div class="container pt-5 pb-5">
        <input v-model="inputValue" @input="updateSuggestions" />
        <ul v-if="showSuggestions">
            <li v-for="(suggestion, index) in filteredSuggestions" :key="index" @click="selectSuggestion(suggestion)">
                {{ suggestion }}
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            inputValue: '',
            suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
            showSuggestions: false,
        };
    },
    computed: {
        filteredSuggestions() {
            return this.suggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(this.inputValue.toLowerCase())
            );
        },
    },
    methods: {
        updateSuggestions() {
            this.showSuggestions = this.inputValue.length > 0;
        },
        selectSuggestion(suggestion) {
            this.inputValue = suggestion;
            this.showSuggestions = false;
        },
    },
};
</script>


<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
}

li {
    padding: 8px;
    cursor: pointer;
}

li:hover {
    background-color: #f0f0f0;
}

input {
    background: #f1f1f1;
    padding: 10px 25px;
}
</style>