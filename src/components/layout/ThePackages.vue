<template>
  <!-- Packages Section Starts Here -->
  <section class="packages-section padding-bottom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <section-header
            class="text-center"
            v-for="sec in section"
            :key="sec.title"
            :title="sec.title"
            :pera="sec.pera"
          ></section-header>
        </div>
      </div>
      <div class="row g-4 justify-content-center">
        <div
          class="col-xl-3 col-lg-4 col-md-6 col-sm-10"
          v-for="(pack, index) in packages"
          :key="index"
        >
          <package-item
            :title="pack.title"
            :location="pack.location"
            :thumb="pack.thumb"
            :discount="pack.discount"
            :fare="pack.fare"
            :reviews="pack.reviews"
            :rating="pack.rating"
          ></package-item>
        </div>
      </div>
    </div>
  </section>
  <!-- Packages Section Ends Here -->
</template>

<script>
import SectionHeader from "./SectionHeader.vue";
import PackageItem from "./PackageItem.vue";
export default {
  components: {
    SectionHeader,
    PackageItem,
  },

  computed: {
    packages() {
      return this.$store.getters["packages/packages"];
    },
    section() {
      return this.$store.getters["packages/section"];
    },
  },
};
</script>
