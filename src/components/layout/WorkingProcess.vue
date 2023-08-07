<template>
  <!-- Working Process Section Starts Here -->
  <section class="working-process padding-top">
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
      <div class="row g-4 gy-md-5 justify-content-center">
        <div
          class="col-lg-4 col-md-6 col-sm-10"
          v-for="process in processes"
          :key="process.id"
        >
          <div class="working-process-item">
            <div class="thumb-wrapper">
              <span>{{ process.id }}</span>
              <div class="thumb">
                <i :class="process.icon"></i>
              </div>
            </div>
            <div class="content">
              <h4 class="title">{{ process.title }}</h4>
              <p>
                {{ process.pera }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Working Process Section Ends Here -->
</template>


<script>
import SectionHeader from "./SectionHeader.vue";
export default {
  components: {
    SectionHeader,
  },
  computed: {
    processes() {
      return this.$store.getters["process/process"];
    },
    section() {
      return this.$store.getters["process/section"];
    },
  },
};
</script>


<style scoped>
.working-process-item {
  text-align: center;
  padding: 30px 25px 15px;
  position: relative;
  -webkit-box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.05);
  box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.05);
  border-radius: 5px;
}

.working-process-item:hover {
  -webkit-box-shadow: 0 0 18px 3px rgba(27, 39, 61, 0.08);
  box-shadow: 0 0 18px 3px rgba(27, 39, 61, 0.08);
}

@media (min-width: 1200px) {
  .working-process-item {
    padding: 35px 30px 25px;
  }
}

.working-process-item .thumb-wrapper {
  display: inline-block;
  position: relative;
}

.working-process-item .thumb-wrapper span {
  position: absolute;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  width: 35px;
  height: 35px;
  right: -15px;
  top: -15px;
  border-radius: 50%;
  background: #0e9e4d;
  font-size: 14px;
  color: #fff;
}

.working-process-item .thumb {
  width: 80px;
  height: 80px;
  -webkit-box-shadow: 0 0 0 8px rgba(14, 158, 77, 0.1);
  box-shadow: 0 0 0 8px rgba(14, 158, 77, 0.1);
  margin: 0 auto 20px;
  border-radius: 50%;
  font-size: 32px;
  color: #0e9e4d;
  background: rgba(14, 158, 77, 0.25);
}

@media (max-width: 1199px) {
  .working-process-item .thumb {
    width: 70px;
    height: 70px;
    font-size: 30px;
  }
}

.working-process-item .content .title {
  margin-bottom: 10px;
}

@media (max-width: 1199px) {
  .working-process-item .content .title {
    margin-bottom: 5px;
  }
}
</style>