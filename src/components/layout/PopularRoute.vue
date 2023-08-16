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
        <div
          class="col-xl-6 col-lg-4 col-md-6 col-sm-6"
          v-for="route in routes"
          :key="route.id"
        >
          <div class="position-relative">
            <form
              class="position-absolute start-0 top-0 bottom-0 end-0 bg-transparent"
              style="z-index: 2"
            >
              <input type="hidden" :value="route.from" />
              <input type="hidden" :value="route.to" />
              <input type="hidden" :value="date" />
              <button
                class="position-absolute start-0 top-0 bottom-0 end-0 bg-transparent h-auto"
                @click="goSearch(route.from, route.to, date)"
              ></button>
            </form>
            <the-route
              :id="route.id"
              :pickTitle="route.pickTitle"
              :pickLocations="route.pickLocations"
              :desTitle="route.desTitle"
              :desLocations="route.desLocations"
            >
            </the-route>
          </div>
        </div>
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
    SectionHeader,
  },

  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
    };
  },

  computed: {
    routes() {
      return this.$store.getters["route/routes"];
    },
    section() {
      return this.$store.getters["route/section"];
    },
  },
  methods: {
    goSearch(from, to, date) {
      const dataToSend = {
        from: from,
        to: to,
        date: date,
      };
      this.$router.push({ path: `/bus-ticket/${JSON.stringify(dataToSend)}` });
    },
  },
};
</script>

<style scoped></style>
