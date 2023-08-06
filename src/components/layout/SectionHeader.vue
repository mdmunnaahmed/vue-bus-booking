<template>
  <div class="section-header text-center">
    <h2 class="title">{{ title }}</h2>
    <p>
      {{ pera }}
    </p>
  </div>
</template>


<script>
export default {
  props: ["title", "pera"],
};
</script>