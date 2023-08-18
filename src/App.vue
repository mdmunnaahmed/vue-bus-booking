<template>
  <the-header v-if="this.$route.path != '/login' && this.$route.path != '/register'"></the-header>
  <router-view></router-view>
  <the-footer v-if="this.$route.path != '/login' && this.$route.path != '/register'"></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Georama:wght@100;300;400;500;600;700&family=Lato:wght@400;700&display=swap");
@import url("https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css");

.theme-one {
  color: #3f58e3 !important;
}

.theme-one-bg {
  background: #3f58e3 !important;
}

.theme-two {
  color: #05b9c8 !important;
}

.theme-two-bg {
  background: #05b9c8 !important;
}

.theme-three {
  color: #b31da3 !important;
}

.theme-three-bg {
  background: #b31da3 !important;
}

.theme-four {
  color: #7e2afc !important;
}

.theme-four-bg {
  background: #7e2afc !important;
}

.gradient-one {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(14%, #4057e3),
    color-stop(73%, #0091ff)
  ) !important;
  background: linear-gradient(180deg, #4057e3 14%, #0091ff 73%) !important;
}

.gradient-two {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(19%, #05b9c8),
    color-stop(58%, #15d6b0),
    color-stop(81%, #25f398)
  ) !important;
  background: linear-gradient(
    180deg,
    #05b9c8 19%,
    #15d6b0 58%,
    #25f398 81%
  ) !important;
}

.gradient-three {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(9%, #b31da3),
    color-stop(50%, #d63f87),
    color-stop(88%, #f9606a)
  ) !important;
  background: linear-gradient(
    180deg,
    #b31da3 9%,
    #d63f87 50%,
    #f9606a 88%
  ) !important;
}

.gradient-four {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(39%, #7e2afc),
    color-stop(70%, #903df7),
    color-stop(88%, #a250f2)
  ) !important;
  background: linear-gradient(
    180deg,
    #7e2afc 39%,
    #903df7 70%,
    #a250f2 88%
  ) !important;
}

/* Text Color */
.text--primary {
  color: #1b273d !important;
}

.text--secondary {
  color: #554bb9 !important;
}

.text--base {
  color: #0e9e4d !important;
}

.text--danger {
  color: #dc3545 !important;
}

.text--warning {
  color: #ffc107 !important;
}

.text--info {
  color: #17a2b8 !important;
}

.text--success {
  color: #28a745 !important;
}

.text--dark {
  color: #343a40 !important;
}

.text--white {
  color: #fff !important;
}

/* Btn Color */
.btn--base {
  color: #fff;
  background: #0e9e4d;
  border-color: #0e9e4d;
}

.btn--danger {
  color: #fff;
  background: #dc3545;
  border-color: #dc3545;
}

.btn--warning {
  color: #fff;
  background: #ffc107;
  border-color: #ffc107;
}

.btn--info {
  color: #fff;
  background: #17a2b8;
  border-color: #17a2b8;
}

.btn--success {
  color: #fff;
  background: #28a745;
  border-color: #28a745;
}

.btn--dark {
  color: #fff;
  background: #343a40;
  border-color: #343a40;
}

/* Background Color */
.bg--primary {
  background: #1b273d !important;
}

.bg--secondary {
  background: #554bb9 !important;
}

.bg--base {
  background: #0e9e4d !important;
}

.bg--danger {
  background: #dc3545 !important;
}

.bg--warning {
  background: #ffc107 !important;
}

.bg--info {
  background: #17a2b8 !important;
}

.bg--success {
  background: #28a745 !important;
}

.bg--dark {
  background: #343a40 !important;
}

.bg--white {
  background: #fff !important;
}

.bg--none {
  background: transparent !important;
}

.facebook {
  color: #3b5998;
}

.twitter {
  color: #55acee;
}

.vimeo {
  color: #1ab7ea;
}

.instagram {
  color: #e4405f;
}

.facebook-bg {
  background: #3b5998;
}

.twitter-bg {
  background: #55acee;
}

.vimeo-bg {
  background: #1ab7ea;
}

.instagram-bg {
  background: #e4405f;
}

html {
  scroll-behavior: smooth;
}

body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  color: #777;
  line-height: 28px;
  overflow-x: hidden !important;
  font-family: "Lato", sans-serif;
  background: white;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
  color: #424248;
  font-family: "Georama", sans-serif;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  color: #424248;
}

h1 a:hover,
h2 a:hover,
h3 a:hover,
h4 a:hover,
h5 a:hover,
h6 a:hover {
  color: #0e9e4d;
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 36px;
  margin-top: -10px;
}

h3 {
  font-size: 30px;
  margin-top: -6px;
}

h4 {
  font-size: 22px;
  font-weight: 500;
}

h5 {
  font-size: 18px;
  font-weight: 500;
}

h6 {
  font-size: 16px;
  font-weight: 500;
}

p {
  margin: 0;
  padding: 0;
}

a {
  display: inline-block;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
  text-decoration: none;
  color: #777;
}

a:hover {
  color: #0e9e4d;
}

span {
  display: inline-block;
}

ul {
  margin: -7px 0;
  padding: 0;
}

ul li {
  list-style: none;
  padding: 7px 0;
}

.bg_img {
  background-size: cover !important;
  background-position: center center;
  background-repeat: no-repeat !important;
}

.bg_fixed {
  background-attachment: fixed !important;
}

input,
textarea,
button {
  border: none;
  outline: none;
  width: 100%;
}

button {
  height: 50px;
  padding: 13px 30px;
  cursor: pointer;
  background: #0e9e4d;
  color: #fff;
  font-weight: 600;
  text-transform: capitalize;
  border-radius: 5px;
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.4s;
  line-height: 1;
}

button:hover {
  background: #0e9e4d;
}

label {
  margin-bottom: 7px;
  cursor: pointer;
}

.form--control {
  width: 100%;
  height: 40px;
  color: #1f1f1f;
  padding: 0 20px;
  border-radius: 5px;
  -webkit-transition: all ease 0.2s;
  transition: all ease 0.2s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14px;
  -webkit-box-shadow: 3px 3px 10px 3px rgba(27, 39, 61, 0.04);
  box-shadow: 3px 3px 10px 3px rgba(27, 39, 61, 0.04);
  border: 1px solid rgba(27, 39, 61, 0.1);
  line-height: 1;
}

.form--control:focus {
  background-color: #fff;
  -webkit-box-shadow: 1px 1px 10px 3px rgba(14, 158, 77, 0.1);
  box-shadow: 1px 1px 10px 3px rgba(14, 158, 77, 0.1);
  border: 1px solid rgba(14, 158, 77, 0.9);
}

::-webkit-input-placeholder {
  color: #1f1f1f;
  line-height: 1;
}

textarea {
  width: 100%;
  height: 130px;
  resize: vertical;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  padding-top: 25px;
  overflow: hidden;
  font-weight: 400;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

textarea.form--control {
  height: 100px;
  padding-top: 10px;
}

img {
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.title,
.name {
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.section-bg {
  background: #f6f6f7;
}

section ::-webkit-scrollbar {
  width: 5px !important;
  height: 5px;
}

section ::-webkit-scrollbar-thumb {
  background: rgba(27, 39, 61, 0.35) !important;
  border-radius: 5px !important;
}

.nice-select {
  height: 40px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 1;
  -webkit-box-shadow: 3px 3px 10px 3px rgba(27, 39, 61, 0.05);
  box-shadow: 3px 3px 10px 3px rgba(27, 39, 61, 0.05);
}

.nice-select ::-webkit-scrollbar {
  width: 5px !important;
  height: 5px;
}

.nice-select ::-webkit-scrollbar-thumb {
  background: rgba(27, 39, 61, 0.35) !important;
  border-radius: 5px !important;
}

.nice-select .list {
  max-height: 150px;
  overflow-y: auto;
  overflow-x: auto;
}

.nice-select .list li {
  min-height: 20px;
  max-height: 35px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.custom--checkbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.custom--checkbox label {
  margin-bottom: -2px;
  padding-left: 7px;
}

.custom--checkbox input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 15px;
  width: 15px;
  cursor: pointer;
  background: #fff;
  border: 1px solid rgba(27, 39, 61, 0.4);
  border-radius: 2px;
  margin-top: 8px;
  border-radius: 2px;
}

.custom--checkbox input[type="checkbox"]:checked {
  background: #fff;
  border-color: #fff;
}

.custom--checkbox input[type="checkbox"]::after {
  position: absolute;
  font-weight: 900;
  font-size: 16px;
  font-family: "Line Awesome Free";
  content: "\f14a";
  font-size: 20px;
  color: #0e9e4d;
  visibility: hidden;
  opacity: 0;
}

.custom--checkbox input[type="checkbox"]:checked::after {
  visibility: visible;
  opacity: 1;
}

.scrollToTop {
  width: 40px;
  height: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
  z-index: 9999;
  bottom: 30px;
  right: 30px;
  font-size: 18px;
  position: fixed;
  -webkit-transform: translateY(150px);
  transform: translateY(150px);
  background: #0e9e4d;
  border-radius: 3px;
}

.scrollToTop:hover {
  color: #fff;
}

.scrollToTop.active {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-animation: bounceInDown 2s;
  animation: bounceInDown 2s;
}

.pos-rel {
  position: relative !important;
}

.slick-list {
  padding: 0 !important;
}

i {
  line-height: 1;
}

@media (min-width: 1200px) {
  .padding-top {
    padding-top: 80px;
  }
  .padding-bottom {
    padding-bottom: 80px;
  }
}

@media (max-width: 1199px) {
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 30px;
  }
  h4 {
    font-size: 22px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 18px;
  }
  .padding-top {
    padding-top: 90px;
  }
  .padding-bottom {
    padding-bottom: 90px;
  }
}

@media (max-width: 991px) {
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 28px;
  }
  h5 {
    font-size: 18px;
  }
  .padding-top {
    padding-top: 80px;
  }
  .padding-bottom {
    padding-bottom: 80px;
  }
}

@media (max-width: 767px) {
  h2 {
    font-size: 32px;
  }
  h4 {
    font-size: 22px;
  }
  h6 {
    font-size: 18px;
  }
  .padding-top {
    padding-top: 70px;
  }
  .padding-bottom {
    padding-bottom: 70px;
  }
}

@media (max-width: 575px) {
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 26px;
  }
  h4 {
    font-size: 20px;
  }
  h5 {
    font-size: 18px;
  }
  h6 {
    font-size: 16px;
  }
  .padding-top {
    padding-top: 60px;
  }
  .padding-bottom {
    padding-bottom: 60px;
  }
  .container,
  .container-fluid {
    max-width: 460px !important;
  }
}

.cmn--btn {
  text-transform: uppercase;
  font-size: 14px;
  padding: 12px 25px;
  border-color: rgba(14, 158, 77, 0.6);
  background: #0e9e4d;
  color: #fff;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  font-weight: 600;
}

.cmn--btn:hover {
  color: #fff;
}

.cmn--btn:hover::before {
  -webkit-animation: cmn--btn-ani 0.3s ease-in;
  animation: cmn--btn-ani 0.3s ease-in;
}

.cmn--btn::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: #fff;
  left: 0;
  top: 0;
  opacity: 0;
}

@media (max-width: 575px) {
  .cmn--btn {
    padding: 10px 15px;
    font-size: 13px;
  }
}

.cmn--btn.btn--sm {
  padding: 8px 24px;
}

@-webkit-keyframes cmn--btn-ani {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
  }
}

@keyframes cmn--btn-ani {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
  }
}

.video-button {
  width: 55px;
  height: 55px;
  z-index: 1;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  -webkit-box-shadow: 0 0 10px 3px rgba(31, 31, 31, 0.2);
  box-shadow: 0 0 10px 3px rgba(31, 31, 31, 0.2);
}

@media (max-width: 1399px) {
  .video-button {
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 1199px) {
  .video-button {
    width: 40px;
    height: 40px;
  }
}

.video-button::before {
  position: absolute;
  content: "";
  left: -7px;
  right: -7px;
  bottom: -7px;
  top: -7px;
  border-radius: 50%;
}

.video-button img {
  max-width: 24px;
  width: 100%;
  z-index: 1;
}

.video-button i {
  font-size: 24px;
  color: #fff;
  z-index: 1;
}

.overlay {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  min-height: 100%;
  background: transparent;
  z-index: -111;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.overlay.active {
  z-index: 111;
}

.overlay.overlay-color {
  background: rgba(31, 31, 31, 0.4);
  z-index: 111;
}

.header-trigger-wrapper,
.header-top-area,
.header-top-area .left-content,
.header-top-area .right-content,
.header-top-area .right-content .header-login,
.social-icons,
.banner-wrapper,
.inner-banner .inner-banner-content .breadcums,
.footer-widget .footer-links li a,
.ticket-form-wrapper .ticket-header,
.ticket-form-wrapper .ticket-type,
.filter-header,
.account-header,
.post-details-content .meta-post,
.contact-wrapper,
.contact-info-wrapper .info-item,
.route-inner .route-content .route-to,
.package-content .package-price,
.testimonial-item .thumb-wrapper,
.bus-search-header .route-info,
.bus-search-header .search-result .wrapper,
.ticket-item,
.travel-time,
.ticket-item-footer .info-list,
.ticket-item-footer .amenities-details .list,
.bus-seat-management .all-seats,
.ratting {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.social-icons li a,
.contact-info-wrapper .info-item .icon,
.working-process-item .thumb-wrapper span,
.working-process-item .thumb,
.how-reserve-item .thumb,
.seat-wrapper .seat,
.preloader {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.ticket-form-wrapper {
  width: 550px;
  border-radius: 10px;
}

@media (max-width: 1199px) {
  .ticket-form-wrapper {
    width: 430px;
  }
}

@media (max-width: 991px) {
  .ticket-form-wrapper {
    width: 500px;
    margin-left: auto;
  }
}

@media (max-width: 767px) {
  .ticket-form-wrapper {
    width: 500px;
    margin-left: 0;
  }
}

.ticket-form-wrapper .ticket-header {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 35px;
}

@media (max-width: 575px) {
  .ticket-form-wrapper .ticket-type {
    margin-top: 5px;
  }
}

.ticket-form-wrapper .ticket-type li a {
  font-size: 14px;
  background: #fff;
  color: #0e9e4d;
  padding: 5px 15px;
}

.ticket-form-wrapper .ticket-type li a.active {
  background: #0e9e4d;
  color: #fff;
}

.ticket-form {
  background: #fff;
  -webkit-box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.1);
  box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.1);
  padding: 30px 15px;
  border-radius: 5px;
  position: relative;
  z-index: 2;
}

.ticket-form .form--group {
  position: relative;
}

.ticket-form .form--group i {
  position: absolute;
  padding: 5px;
  left: 5px;
  top: 5px;
  font-size: 20px;
  color: #0e9e4d;
}

.ticket-form .form--group .form--control {
  border-color: rgba(14, 158, 77, 0.25);
  padding-left: 35px;
  height: 40px;
}

.ticket-form .form--group .form--control:focus {
  border-color: rgba(14, 158, 77, 0.95);
}

.ticket-form .form--group button {
  height: 40px;
}

.ticket-cancellation .container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.ticket-cancellation-wrapper {
  max-width: 740px;
  padding: 40px 35px;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  -webkit-box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.1);
  box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.1);
  background: #fff;
}

@media (max-width: 575px) {
  .ticket-cancellation-wrapper {
    padding: 20px 15px;
  }
}

.ticket-cancellation-wrapper .title {
  margin-bottom: 10px;
}

.ticket-cancellation-wrapper p {
  margin-bottom: 35px;
}

.ticket-cancellation-form {
  text-align: left;
}

.ticket-cancellation-form .form--group {
  position: relative;
}

.ticket-cancellation-form .form--group label span {
  color: #f53b57;
}

.ticket-cancellation-form .form--group .otp-btn {
  position: absolute;
  right: 0;
  bottom: 0;
  width: auto;
}

.ticket-cancellation-form .otp-btn {
  height: 40px;
  margin: 0;
  line-height: 1;
  padding: 0 18px;
  font-size: 13px;
}

.ticket-cancellation-form button {
  margin-top: 10px;
}

.section-header {
  margin-bottom: 40px;
}

.section-header .title {
  margin-bottom: 15px;
}

.section-header .title span {
  color: #0e9e4d;
}

@media (max-width: 575px) {
  .section-header {
    text-align: center;
  }
}
.cmn--btn.btn--sm {
  padding: 5px 13px !important;
  font-size: 13px !important;
  font-weight: 600;
  word-spacing: 4px;
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

.pagination {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 50px;
}

@media (max-width: 991px) {
  .pagination {
    margin-top: 40px;
  }
}

.pagination li a {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(31, 31, 31, 0.12);
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 5px;
  font-weight: 500;
}

.pagination li a.active,
.pagination li a:hover {
  background: #0e9e4d;
  border-color: #0e9e4d;
  color: #fff;
}
</style>
