<template>
  <!-- Inner Banner Section Starts Here -->
  <section class="inner-banner">
    <img :src="require(`@/assets/bg/${bg}`)" alt="" class="inner-banner-bg" />
    <div class="container">
      <div class="inner-banner-content">
        <h2 class="title">{{ title }}</h2>
        <ul class="breadcums">
          <li>
            <router-link to="/" class="home">Home</router-link>
          </li>
          <li>{{ slug }}</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- Inner Banner Section Ends Here -->
</template>

<script>
export default {
  props: ["title", "slug", "bg"],
};
</script>

<style scoped>
.inner-banner {
  position: relative;
  padding: 70px 0;
}
.inner-banner-bg {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.inner-banner::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(27, 39, 61, 0.4);
}

.inner-banner .inner-banner-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.inner-banner .inner-banner-content .title {
  font-size: 40px;
  color: #fff;
}

@media (max-width: 767px) {
  .inner-banner .inner-banner-content .title {
    font-size: 34px;
  }
}

@media (max-width: 767px) {
  .inner-banner .inner-banner-content .title {
    font-size: 30px;
  }
}

.inner-banner .inner-banner-content .breadcums {
  margin-top: 15px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: -30px;
}

.inner-banner .inner-banner-content .breadcums li {
  padding: 0;
  padding-right: 30px;
  color: #fff;
}

.inner-banner .inner-banner-content .breadcums li a {
  position: relative;
  font-size: 18px;
  color: #fff;
}

.inner-banner .inner-banner-content .breadcums li a:hover {
  color: #0e9e4d;
}

.inner-banner .inner-banner-content .breadcums li .home {
  padding-right: 10px;
}

.inner-banner .inner-banner-content .breadcums li .home::before {
  position: absolute;
  font-weight: 900;
  font-size: 16px;
  font-family: "Line Awesome Free";
  content: "\f061";
  left: 100%;
  top: 2px;
  color: #fff;
}
</style>