<template>
  <div class="section-header">
    <h2 class="title">{{ title }}</h2>
    <p>
      {{ pera }}
    </p>
  </div>
</template>


<script>
export default {
  props: ["title", "pera", 'style'],
};
</script>