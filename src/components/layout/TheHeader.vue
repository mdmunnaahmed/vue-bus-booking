<template>
  <!-- Header Section Starts Here -->
  <header class="header">
    <!-- <div class="header-top">
      <div class="container">
        <div class="header-top-area">
          <ul class="left-content">
            <li>
              <i class="las la-phone"></i>
              <router-link to="tel:012839"> +880 2483 03940 </router-link>
            </li>
            <li>
              <i class="las la-envelope-open"></i>
              <router-link to="mailto:msdmuntoa@gmail.com"> shohanuahman@gmail.com </router-link>
            </li>
          </ul>
          <div class="right-content">
            <router-link class="cancel-ticket" to="cancel-ticket.html">Cancel Ticket</router-link>
            <div>
              <select>
                <option value="lang1">English</option>
                <option value="lang2">Bangla</option>
              </select>
            </div>
            <ul class="header-login">
              <li>
                <router-link class="sign-in" to="sign-in.html"
                  ><i class="fas fa-sign-in-alt"></i>Sign In</
                >
              </li>
              <li>/</li>
              <li>
                <router-link class="sign-up" to="sign-up.html"
                  ><i class="fas fa-user-plus"></i>Sign Up</
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
    <div class="header-bottom">
      <div class="container">
        <div class="header-bottom-area">
          <div class="logo">
            <router-link to="/">
              <img src="../../assets/logo.png" alt="logo" />
            </router-link>
          </div>
          <!-- Logo End -->

          <div class="header-trigger-wrapper d-flex d-lg-none">
            <div class="header-trigger d-block d-lg-none">
              <span></span>
            </div>
            <div class="top-bar-trigger">
              <i class="las la-ellipsis-v"></i>
            </div>
          </div>
          <!-- Trigger End-->

          <ul class="menu">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="#0">Booking</router-link>
              <ul class="sub-menu">
                <li>
                  <router-link to="/bus-ticket">Bus Ticket</router-link>
                </li>
                <li>
                  <router-link to="/reserve-bus">Reserve Bus</router-link>
                </li>
                <li>
                  <router-link to="/cancel-ticket">Cancel Ticket</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/faq">Faq</router-link>
            </li>
            <li>
              <router-link to="#0">Pages</router-link>
              <ul class="sub-menu">
                <li>
                  <router-link to="/user-dashboard">Dashboard</router-link>
                </li>
                <li>
                  <router-link to="/login">Sign In</router-link>
                </li>
                <li>
                  <router-link to="/register">Sign Up</router-link>
                </li>
                <li>
                  <router-link to="/packages">Packages</router-link>
                </li>
                <li>
                  <router-link to="/terms-conditions"
                    >Terms & Conditions</router-link
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/blog">Blog</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
          <div
            v-if="isLoggedIn"
            class="d-flex flex-wrap gap-3 align-items-center"
          >
            <router-link to="/user-dashboard" class="cmn--btn btn--sm"
              >Dashboard</router-link
            >
            <a href=""
              @click="logout"
              class="text-danger"
            >
              Logout
            </a>
          </div>
          <router-link v-if="!isLoggedIn" to="/login" class="cmn--btn btn--sm"
            >Login</router-link
          ><!-- Menu End -->
        </div>
      </div>
    </div>
  </header>
  <!-- Header Section Ends Here -->
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  z-index: 999;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
  background: #fff;
}

.header.sticky {
  top: 0;
}

.header.sticky .menu a:hover {
  color: #0e9e4d;
}

.header.sticky .menu .sub-menu a {
  color: #777;
}

.header.sticky .menu .sub-menu a:hover {
  color: #fff !important;
}

.header-bottom {
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
  width: 100%;
  -webkit-box-shadow: 0 3px 20px 1px rgba(31, 31, 31, 0.07);
  box-shadow: 0 3px 20px 1px rgba(31, 31, 31, 0.07);
}

@media (min-width: 1400px) {
  .header-bottom {
    padding: 5px 0;
  }
}

.header-bottom-area {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

@media (max-width: 575px) {
  .header-bottom-area .cmn--btn {
    display: none;
  }
}

.logo img {
  max-width: 170px;
  max-height: 80px;
}

.menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.menu > .has-sub-menu {
  margin-right: 15px;
}

@media (min-width: 992px) {
  .menu > .has-sub-menu.open .sub-menu {
    display: block !important;
  }
}

@media (min-width: 992px) {
  .menu .sub-menu {
    display: block !important;
  }
}

.menu li {
  padding: 0px 5px;
  position: relative;
}

.menu li:hover > .sub-menu {
  visibility: visible;
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.menu li.has-sub-menu > a {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.menu li.has-sub-menu > a::after {
  position: absolute;
  content: "\f107";
  font-weight: 900;
  font-family: "Line Awesome Free";
  right: 0;
  top: 50%;
  -webkit-transform: translate(8px, -50%);
  transform: translate(8px, -50%);
  font-size: 14px;
}

.menu li a {
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  color: #1f1f1f;
  font-family: "Georama", sans-serif;
}

@media (max-width: 1199px) {
  .menu li a {
    font-size: 14px;
  }
}

.menu li a.color {
  background: rgba(27, 39, 61, 0.9);
  color: #fff !important;
}

@media (max-width: 1399px) {
  .menu li a {
    font-size: 14px;
  }
}

@media (max-width: 1199px) {
  .menu li a {
    padding: 8px 7px;
  }
}

@media (min-width: 992px) {
  .sub-menu {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    min-width: 180px;
    background: #fff;
    border-radius: 5px !important;
    top: 100%;
    left: 0px;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    z-index: 11;
    -webkit-box-shadow: 0 3px 15px 1px rgba(31, 31, 31, 0.08);
    box-shadow: 0 3px 15px 1px rgba(31, 31, 31, 0.08);
    overflow: hidden;
  }
  .sub-menu li {
    padding: 0;
    border-bottom: 1px dashed rgba(27, 39, 61, 0.2);
  }
  .sub-menu li:last-child {
    border: none;
  }
  .sub-menu li a {
    font-size: 14px;
    padding: 5px 15px;
    display: block;
    color: #777 !important;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-line-clamp: 1;
  }
  .sub-menu li a:hover {
    padding-left: 20px;
    background: #1b273d;
    color: #fff !important;
  }
  .sub-menu li:hover {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .sub-menu li .sub-menu {
    visibility: hidden;
    opacity: 0;
    top: 5px;
    left: -100%;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
  .sub-menu li.has-sub-menu > a::after {
    -webkit-transform: translate(-20px, -50%);
    transform: translate(-20px, -50%);
  }
}

.header-trigger-wrapper {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header-trigger-wrapper .top-bar-trigger {
  color: #1f1f1f;
  font-size: 28px;
  padding: 5px;
}

.header-trigger {
  margin-right: 5px;
  margin-top: -10px;
  cursor: pointer;
  position: relative;
  z-index: 9999;
}

.header-trigger::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  width: auto;
  left: -5px;
  right: -5px;
  top: 50%;
  -webkit-transform: translateY(-30%);
  transform: translateY(-30%);
  border: 1px solid rgba(31, 31, 31, 0.4);
  border-radius: 3px;
}

.header-trigger.active span {
  background: none;
}

.header-trigger.active span::before {
  -webkit-transform: rotate(-45deg) translate(-4px, 4px);
  transform: rotate(-45deg) translate(-4px, 4px);
}

.header-trigger.active span::after {
  -webkit-transform: rotate(45deg) translate(-4px, -4px);
  transform: rotate(45deg) translate(-4px, -4px);
}

.header-trigger span {
  width: 25px;
  height: 2px;
  background: #1f1f1f;
  position: relative;
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.4s;
}

.header-trigger span::after,
.header-trigger span::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  background: #1f1f1f;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.header-trigger span::after {
  bottom: -5px;
}

.header-trigger span::before {
  top: -5px;
}

@media (max-width: 991px) {
  .header-area {
    position: relative;
  }
  .menu > li:nth-last-child(1) {
    border-bottom: none;
  }
  .menu > li:nth-last-child(2) {
    border-bottom: none;
  }
  .menu {
    margin-top: 0px;
    position: absolute;
    top: -30px;
    left: 0;
    min-width: 250px;
    width: 100%;
    height: 100vh;
    visibility: hidden;
    -webkit-transform-origin: left;
    transform-origin: left;
    -webkit-transform: translateX(-300px) scaleY(0.95);
    transform: translateX(-300px) scaleY(0.95);
    opacity: 0;
    padding: 30px 25px;
    padding-bottom: 170px;
    -webkit-transition: all ease 0.4s;
    transition: all ease 0.4s;
    overflow-y: auto;
    display: block;
  }
  .menu.active {
    background: #1b273d;
    opacity: 1;
    -webkit-transform: translateY(0) scaleY(1);
    transform: translateY(0) scaleY(1);
    visibility: visible;
    z-index: 99999;
    top: 80px;
  }
  .menu.active .cmn--btn {
    border-color: #fff;
  }
  .menu .has-sub-menu > a::after {
    -webkit-transform: translate(-20px, -50%) !important;
    transform: translate(-20px, -50%) !important;
  }
  .menu li {
    padding: 0 !important;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .menu li:nth-last-child(1) {
    border-bottom: none;
  }
  .menu li a {
    color: #fff !important;
  }
  .menu li .sub-menu {
    background: rgba(27, 39, 61, 0.85);
  }
  .menu li.has-sub-menu a::after {
    -webkit-transform: translate(-20px, -50%) !important;
    transform: translate(-20px, -50%) !important;
  }
  .menu li .button-area {
    margin-bottom: -10px;
  }
  .menu li .cmn--btn {
    margin-bottom: 10px;
  }
  .sub-menu {
    display: none;
    padding-left: 25px;
    background: #fff;
  }
}

@media (max-width: 575px) {
  .logo img {
    max-height: 60px;
    max-width: 150px;
  }
}

.header-top {
  padding: 5px 0;
  border-bottom: 1px solid rgba(27, 39, 61, 0.1);
  font-size: 14px;
}

@media (max-width: 991px) {
  .header-top {
    position: fixed;
    top: -100%;
    width: 100%;
    opacity: 0;
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
  }
  .header-top.active {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    z-index: 11111;
    background: #fff;
    padding: 10px 0;
    top: 0;
  }
}

.header-top-area {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (max-width: 991px) {
  .header-top-area {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

.header-top-area .left-content li {
  padding: 0;
  margin-right: 15px;
  padding-right: 15px;
  position: relative;
}

.header-top-area .left-content li:last-child::before {
  background: none;
}

.header-top-area .left-content li::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  width: 1px;
  height: 50%;
  background: rgba(14, 158, 77, 0.3);
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

@media screen and (max-width: 449px) {
  .header-top-area .left-content li::before {
    background: none;
  }
}

.header-top-area .left-content li i {
  color: #0e9e4d;
  text-align: center;
  line-height: 35px;
  font-size: 18px;
  margin-right: 3px;
  border-radius: 3px;
}

@media (max-width: 991px) {
  .header-top-area .left-content {
    margin-bottom: 5px;
  }
}

.header-top-area .right-content {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header-top-area .right-content .nice-select {
  height: 35px;
}

.header-top-area .right-content .cancel-ticket {
  margin-right: 15px;
}

.header-top-area .right-content .header-login {
  margin-left: 20px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid rgba(31, 31, 31, 0.1);
  border-radius: 3px;
}

.header-top-area .right-content .header-login li {
  padding: 0;
  line-height: 1;
  padding: 10px 9px;
}

.header-top-area .right-content .header-login li i {
  color: #0e9e4d;
  margin-right: 5px;
}

.header-top-area .right-content .header-login li .sign-in {
  color: #0e9e4d;
}

@media screen and (max-width: 449px) {
  .header-top-area .right-content .header-login {
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 0;
  }
}

.social-icons {
  margin-top: 15px;
  margin-left: -5px;
}

.social-icons li a {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 5px;
  font-size: 20px;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.social-icons li a:hover {
  background: #0e9e4d;
  color: #fff;
  border-color: #0e9e4d;
}

.social-icons li a:hover i {
  color: #fff;
  font-size: 20px;
}

.social-icons li a i {
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
</style>
