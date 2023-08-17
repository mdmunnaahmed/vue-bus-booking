<template>
  <inner-banner
    v-for="con in faqPage"
    :key="con.slug"
    title="Popular Packages"
    slug="Packages"
    :bg="con.bg"
  ></inner-banner>
  <!-- Packages Section Starts Here -->
  <section class="packages-section padding-bottom padding-top">
    <div class="container">
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
import InnerBanner from "@/components/layout/InnerBanner.vue";
import PackageItem from "@/components/layout/PackageItem.vue";
export default {
  components: {
    PackageItem,
    InnerBanner,
  },

  computed: {
    packages() {
      return this.$store.getters["packages/packages"];
    },
    section() {
      return this.$store.getters["packages/section"];
    },
    faqPage() {
      return this.$store.getters["faqs/faqPage"];
    },
  },
};
</script>
