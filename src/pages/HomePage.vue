<template>
  <the-banner></the-banner>
  <working-process></working-process>
  <popular-route></popular-route>
  <our-aminities></our-aminities>
  <the-packages></the-packages>
  <the-posts></the-posts>
</template>

<script>
import TheBanner from "@/components/layout/TheBanner.vue";
import WorkingProcess from "@/components/layout/WorkingProcess.vue";
import PopularRoute from "@/components/layout/PopularRoute.vue";
import OurAminities from "@/components/layout/OurAminities.vue";
import ThePackages from "@/components/layout/ThePackages.vue";
import ThePosts from "@/components/layout/ThePosts.vue";
export default {
  components: {
    TheBanner,
    WorkingProcess,
    PopularRoute,
    OurAminities,
    ThePackages,
    ThePosts,
  },
};
</script>