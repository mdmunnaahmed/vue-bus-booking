<template>
  <!-- Our Ameninies Section Starts Here -->
  <section class="amenities-section padding-bottom">
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
      <div class="amenities-wrapper">
        <div class="amenities-slider row g-4 justify-content-center">
          <div
            class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
            v-for="(aminity, index) in aminities"
            :key="index"
          >
            <div class="amenities-item">
              <div class="thumb">
                <img
                  :src="require(`@/assets/icons/${aminity.icon}`)"
                  alt=""
                />
              </div>
              <h6 class="title">{{ aminity.title }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Our Ameninies Section Ends Here -->

</template>


<script>
import SectionHeader from "./SectionHeader.vue";
export default {
  components: {
    SectionHeader,
  },

  computed: {
    aminities() {
      return this.$store.getters["aminities/aminities"];
    },
    section() {
      return this.$store.getters["aminities/section"];
    },
  },
};
</script>
<style scoped>
.amenities-item {
  -webkit-box-shadow: 0 0 7px rgba(27, 39, 61, 0.25);
  box-shadow: 0 0 7px rgba(27, 39, 61, 0.25);
  padding: 25px 30px;
  text-align: center;
  border-radius: 5px;
  margin: 0 10px;
  width: 100%;
}

@media (max-width: 1199px) {
  .amenities-item {
    padding: 30px;
  }
}

@media (max-width: 991px) {
  .amenities-item {
    padding: 25px 30px;
  }
}

@media (max-width: 575px) {
  .amenities-item {
    padding: 15px 20px;
    margin: 0 5px;
  }
}

.amenities-item:hover {
  -webkit-box-shadow: 0 0 10px 1px rgba(14, 158, 77, 0.25);
  box-shadow: 0 0 10px 1px rgba(14, 158, 77, 0.25);
}

.amenities-item:hover .thumb {
  color: rgba(14, 158, 77, 0.8);
  border-color: rgba(14, 158, 77, 0.6);
}

.amenities-item .thumb {
  display: inline-block;
  font-size: 60px;
  color: rgba(27, 39, 61, 0.5);
  border-bottom: 2px solid rgba(27, 39, 61, 0.2);
  padding-bottom: 10px;
  margin-bottom: 15px;

}

.amenities-item .thumb img {
  max-width: 50px;
}

@media (max-width: 1199px) {
  .amenities-item .thumb {
    font-size: 56px;
    
  }
}

@media (max-width: 991px) {
  .amenities-item .thumb {
    font-size: 48px;
    padding-bottom: 6px;
    margin-bottom: 10px;
    
  }
}

@media (max-width: 575px) {
  .amenities-item .thumb {
    font-size: 42px;
    
  }
}

.amenities-item .title {
  font-size: 18px;
  font-weight: 400;
  color: rgba(27, 39, 61, 0.5);
}

@media (max-width: 1199px) {
  .amenities-item .title {
    font-size: 16px;
  }
}

@media (max-width: 991px) {
  .amenities-item .title {
    font-size: 15px;
  }
}

@media (max-width: 575px) {
  .amenities-item .title {
    font-size: 14px;
  }
}
</style>