<template>
  <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
    <a href="#0" class="route-item">
      <div class="route-inner">
        <div class="route-icon">
          <i class="las la-map-marker"></i>
        </div>
        <div class="route-content">
          <h5 class="title">{{ pickTitle }}</h5>
          <ul class="route-to">
            <li v-for="pickL in pickLocations" :key="pickL">{{ pickL }}</li>
          </ul>
        </div>
      </div>
      <div class="icon">
        <i class="las la-exchange-alt"></i>
      </div>
      <div class="route-inner">
        <div class="route-icon">
          <i class="lar la-dot-circle"></i>
        </div>
        <div class="route-content">
          <h5 class="title">{{ desTitle }}</h5>
          <ul class="route-to">
            <li v-for="desL in desLocations" :key="desL">{{ desL }}</li>
          </ul>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["pickTitle", "pickLocations", "desTitle", "desLocations"],
};
</script>


<style scoped>
.route-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.route-item:hover .route-content .title {
  color: #0e9e4d;
}

.route-item .icon {
  width: 20px;
  font-size: 20px;
  margin: 0 10px;
}

.route-item .icon img {
  width: 100%;
}

@media (max-width: 1199px) {
  .route-item .icon {
    margin: 10px auto;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@media (max-width: 1199px) {
  .route-item {
    display: block;
  }
}

.route-inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 15px 25px;
  border: 1px solid rgba(14, 158, 77, 0.25);
  border-radius: 5px;
  height: 100%;
  min-width: 280px;
}

.route-inner .route-icon {
  width: 35px;
  height: 35px;
  font-size: 34px;
  color: #0e9e4d;
  border-radius: 5px;
  line-height: 1;
  margin-left: -10px;
}

.route-inner .route-content {
  width: calc(100% - 35px);
  padding-left: 15px;
}

.route-inner .route-content .route-to {
  margin-top: 7px;
}

.route-inner .route-content .route-to li {
  padding: 2px 3px;
  line-height: 1.3;
  color: #777;
}
</style>