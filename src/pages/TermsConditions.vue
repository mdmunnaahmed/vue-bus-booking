<template>
  <inner-banner
    v-for="con in faqPage"
    :key="con.slug"
    title="Terms & Conditions"
    slug="TOC"
    :bg="con.bg"
  ></inner-banner>

  <!-- Privacy Policy Section Starts Here -->
  <section class="privacy-policy padding-top padding-bottom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="privacy-policy-content">
            <div class="content-item">
              <h4 class="title" id="overview">Overview</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda officia vel omnis, odit quidem, expedita nam deserunt
                molestiae accusamus voluptas aut. Sapiente voluptatem nulla unde
                quia harum illum ipsum dolore! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. In dolorem illum molestiae
                corrupti, maxime sint velit quibusdam officiis ipsam a minima
                quos voluptates possimus eaque, vitae, veniam consequuntur!
                Dolorem, architecto.
              </p>
            </div>
            <div class="content-item">
              <h4 class="title" id="data-collection">Data Collection & Use</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda officia vel omnis, odit quidem, expedita nam deserunt
                molestiae accusamus voluptas aut. Sapiente voluptatem nulla unde
                quia harum illum ipsum dolore! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. In dolorem illum molestiae
                corrupti, maxime sint velit quibusdam officiis ipsam a minima
                quos voluptates possimus eaque, vitae, veniam consequuntur!
                Dolorem, architecto.
              </p>
              <ul class="info-list">
                <li>
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li>
                  Finibus onorum et alorum" by icero classical lite rature,
                  discovered
                </li>
                <li>
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li>
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
              </ul>
            </div>
            <div class="content-item">
              <h4 class="title" id="cookies">Cookies Data</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda officia vel omnis, odit quidem, expedita nam deserunt
                molestiae accusamus voluptas aut. Sapiente voluptatem nulla unde
                quia harum illum ipsum dolore! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. In dolorem illum molestiae
                corrupti, maxime sint velit quibusdam officiis ipsam a minima
                quos voluptates possimus eaque, vitae, veniam consequuntur!
                Dolorem, architecto.
              </p>
            </div>
            <div class="content-item">
              <h4 class="title" id="data-security">Data Collection & Use</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda officia vel omnis, odit quidem, expedita nam deserunt
                molestiae accusamus voluptas aut. Sapiente voluptatem nulla unde
                quia harum illum ipsum dolore! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. In dolorem illum molestiae
                corrupti, maxime sint velit quibusdam officiis ipsam a minima
                quos voluptates possimus eaque, vitae, veniam consequuntur!
                Dolorem, architecto.
              </p>
            </div>
            <div class="content-item">
              <h4 class="title" id="overview2">Data Cookies</h4>
              <p>
                deserunt molestiae accusamus voluptas aut. Sapiente voluptatem
                nulla unde quia harum illum ipsum dolore! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. In dolorem illum molestiae
                corrupti, maxime sint velit quibusdam officiis ipsam a minima
                quos voluptates possimus eaque, vitae, veniam consequuntur!
                Dolorem, architecto. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Assumenda officia vel omnis, odit quidem,
                expedita nam deserunt molestiae accusamus voluptas aut. Sapiente
                voluptatem nulla unde quia harum illum ipsum dolore! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. In dolorem illum
                molestiae corrupti, maxime sint velit quibusdam officiis ipsam a
                minima quos voluptates possimus eaque, vitae, veniam
                consequuntur! Dolorem, architecto.
              </p>
            </div>
            <div class="content-item">
              <h4 class="title" id="overview3">Data Storage</h4>
              <p>
                Pconsectetur adipisicing elit. Assumenda officia vel omnis, odit
                quidem, expedita nam deserunt molestiae accusamus voluptas aut.
                Sapiente voluptatem nulla unde quia harum illum ipsum dolore!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                dolorem illum molestiae corrupti, maxime sint velit quibusdam
                officiis ipsam a minima quos voluptates possimus eaque, vitae,
                veniam consequuntur! Dolorem, architecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Privacy Policy Section Ends Here -->
</template>

<script>
import InnerBanner from "@/components/layout/InnerBanner.vue";
export default {
  components: {
    InnerBanner,
  },
  computed: {
    faqPage() {
      return this.$store.getters["faqs/faqPage"];
    },
  },
};
</script>

<style scoped>
.privacy-policy-content .content-item {
  margin-bottom: 40px;
}

.privacy-policy-content .content-item .title {
  margin-bottom: 15px;
}

.privacy-policy-content .content-item .info-list {
  margin-top: 15px;
}

.privacy-policy-content .content-item .info-list li {
  padding-left: 25px;
  position: relative;
}

.privacy-policy-content .content-item .info-list li::before {
  position: absolute;
  font-weight: 900;
  font-size: 16px;
  font-family: "Line Awesome Free";
  content: "\f101";
  left: 0;
  top: 7px;
  color: #1b273d;
}
</style>
