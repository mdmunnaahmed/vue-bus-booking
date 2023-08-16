<template>
  <!-- Footer Section Starts Here -->
  <section class="footer-seciton">
    <div class="footer-top">
      <div class="container">
        <div class="row footer-wrapper gy-sm-5 gy-4">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="footer-widget">
              <div class="logo" v-for="foot in footer" :key="foot.footerPera">
                <img
                  :src="require(`@/assets/${foot.logo}`)"
                  alt="logo"
                  style="max-height: 80px"
                />
              </div>
              <p v-for="foot in footer" :key="foot.footerPera">
                {{ foot.footerPera }}
              </p>
              <ul class="social-icons">
                <li v-for="(social, index) in socialLinks" :key="index">
                  <router-link :to="social.iconLink"
                    ><i :class="social.icon"></i
                  ></router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6">
            <div class="footer-widget">
              <h4 class="widget-title">Popular Routes</h4>
              <ul class="footer-links">
                <li
                  class="position-relative"
                  v-for="(popular, index) in popularRoutes"
                  :key="index"
                >
                  <div>
                    <form
                      class="position-absolute start-0 top-0 bottom-0 end-0 bg-transparent"
                      style="z-index: 2"
                    >
                      <input type="hidden" :value="popular.from" />
                      <input type="hidden" :value="popular.to" />
                      <input type="hidden" :value="date" />
                      <button
                        class="position-absolute start-0 top-0 bottom-0 end-0 bg-transparent h-auto"
                        @click="goSearch(popular.from, popular.to, date)"
                      ></button>
                    </form>
                    <span>{{ popular.from }}</span
                    ><i class="las la-arrow-right"></i>
                    <span>{{ popular.to }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6">
            <div class="footer-widget">
              <h4 class="widget-title">New Routes</h4>
              <ul class="footer-links">
                <li
                  class="position-relative"
                  v-for="(popular, index) in popularRoutes"
                  :key="index"
                >
                  <div>
                    <form
                      class="position-absolute start-0 top-0 bottom-0 end-0 bg-transparent"
                      style="z-index: 2"
                    >
                      <input type="hidden" :value="popular.from" />
                      <input type="hidden" :value="popular.to" />
                      <input type="hidden" :value="date" />
                      <button
                        class="position-absolute start-0 top-0 bottom-0 end-0 bg-transparent h-auto"
                        @click="goSearch(popular.from, popular.to, date)"
                      ></button>
                    </form>
                    <span>{{ popular.from }}</span
                    ><i class="las la-arrow-right"></i>
                    <span>{{ popular.to }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6">
            <div class="footer-widget">
              <h4 class="widget-title">Useful Links</h4>
              <ul class="footer-links">
                <li v-for="(useful, index) in usefulLinks" :key="index">
                  <router-link to="">
                    {{ useful }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6">
            <div class="footer-widget">
              <h4 class="widget-title">Support</h4>
              <ul class="footer-links">
                <li v-for="(support, index) in supportLinks" :key="index">
                  <router-link to="">
                    {{ support }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer Section Ends Here -->
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
    };
  },

  computed: {
    footer() {
      return this.$store.getters["footer/footer"];
    },
    socialLinks() {
      return this.$store.getters["footer/socialLinks"];
    },
    popularRoutes() {
      return this.$store.getters["route/routes"];
    },
    newRoutes() {
      return this.$store.getters["footer/newRoutes"];
    },
    usefulLinks() {
      return this.$store.getters["footer/usefulLinks"];
    },
    supportLinks() {
      return this.$store.getters["footer/supportLinks"];
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

<style scoped>
.footer-top {
  background: rgba(27, 39, 61, 0.99);
  padding: 80px 0;
}

.footer-wrapper {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.footer-widget * {
  color: rgba(255, 255, 255, 0.85);
}

.footer-widget .logo {
  margin-bottom: 15px;
}

.footer-widget .widget-title {
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 10px;
  color: #0e9e4d !important;
}

@media (max-width: 575px) {
  .footer-widget .widget-title {
    margin-bottom: 20px;
  }
}

.footer-widget .widget-title::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  width: 75px;
  height: 1px;
  background: rgba(14, 158, 77, 0.7);
  bottom: 0;
  left: 0;
}

.footer-widget .widget-title::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  width: 45px;
  height: 1px;
  background: rgba(14, 158, 77, 0.7);
  bottom: -5px;
  left: 0;
}

.footer-widget .footer-links {
  font-size: 15px;
}

.footer-widget .footer-links li {
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

@media (max-width: 575px) {
  .footer-widget .footer-links li {
    font-size: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .footer-widget .footer-links li:last-child {
    border-bottom: none;
  }
}

.footer-widget .footer-links li a {
  font-weight: 500;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.footer-widget .footer-links li a i {
  padding: 0 5px;
}

.footer-widget .footer-links li :hover * {
  color: #0e9e4d;
}
</style>
