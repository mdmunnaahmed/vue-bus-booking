<template>
  <!-- Route Section Starts Here -->
  <section class="route-section padding-top padding-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <section-header
            v-for="sec in section"
            :key="sec.title"
            :title="sec.title"
            :pera="sec.pera"
          ></section-header>
        </div>
      </div>
      <div class="row justify-content-between gy-4">
        <the-route
          v-for="route in routes"
          :key="route.id"
          :pickTitle="route.pickTitle"
          :pickLocations="route.pickLocations"
          :desTitle="route.desTitle"
          :desLocations="route.desLocations"
        ></the-route>
      </div>
    </div>
  </section>
  <!-- Route Section Ends Here -->
</template>


<script>
import TheRoute from "../TheRoute.vue";
import SectionHeader from "./SectionHeader.vue";
export default {
  components: {
    TheRoute,
    SectionHeader
  },

  computed: {
    routes() {
      return this.$store.getters["route/routes"];
    },
    section() {
      return this.$store.getters["route/section"];
    },
  },
};
</script>

<style scoped>
</style>