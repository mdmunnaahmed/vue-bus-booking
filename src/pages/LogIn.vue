<template>
  <base-modal v-if="isLoading && !error">
    <h4 class="text-center">Authenticating</h4>
    <h6>{{ error }}</h6>
  </base-modal>

  <base-dialog v-if="error" @close="closeDialog">
    <template #ico>
      <img
        style="width: 60px; object-fit: contain"
        src="../assets/icon/close.png"
        alt="icon"
      />
    </template>
    <template #default>
      <p class="text-center">{{ error }}</p>
    </template>
    <template #actions>
      <div class="text-center">
        <button
          class="btn btn-danger shadow-lg w-auto px-5 py-2 h-auto"
          @click="closeDialog"
        >
          Close
        </button>
      </div>
    </template>
  </base-dialog>
  <!-- Account Section Starts Here -->
  <section class="account-section">
    <div class="account-wrapper">
      <div class="account-form-wrapper">
        <div class="account-header">
          <div class="left-content">
            <h3 class="title">Welcome Back</h3>
            <span>Log In your Account</span>
          </div>
        </div>
        <form class="account-form row" @submit.prevent="submitForm">
          <div class="col-lg-12">
            <div class="form--group">
              <label for="usern">Username</label>
              <input
                id="usern"
                type="text"
                class="form--control"
                placeholder="Enter Your Email"
                v-model.trim="email"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form--group">
              <label for="pass">Password</label>
              <input
                id="pass"
                type="password"
                class="form--control"
                placeholder="Enter Your Password"
                v-model.trim="password"
              />
            </div>
          </div>
          <!-- <div class="col-lg-12">
            <div class="form--group custom--checkbox">
              <input type="checkbox" id="remembar-me" />
              <label for="remembar-me">Remembar Me</label>
            </div>
          </div> -->
          <div class="col-md-12">
            <p v-if="!formIsValid">Please enter a valid username & password</p>
            <div class="form--group">
              <button class="account-button">Log In</button>
            </div>
          </div>
          <div class="col-md-12">
            <div class="account-page-link">
              <p>
                Don't have any Account?
                <router-link to="/register">Sign Up</router-link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- Account Section Ends Here -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      if (this.email == "" || this.password.length < 6) {
        return false;
      }
      this.isLoading = true;
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.replace("/user-dashboard");
      } catch (err) {
        this.error = err.message || "Failed to login, Try again.";
      }
      this.email = "";
      this.password = "";
      this.isLoading = false;
    },
    closeDialog() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
.account-section {
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  overflow-y: auto;
}

.account-section::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(27, 39, 61, 0.1);
}

.account-section .container {
  position: relative;
  z-index: 1;
}

.account-section .spark {
  position: absolute;
  background: #fff;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    #ffe2e2 0%,
    rgba(255, 255, 255, 0) 51%,
    rgba(0, 212, 255, 0) 100%
  );
  left: 11%;
  bottom: 130px;
  opacity: 0.5;
  -webkit-animation: pulse 2s linear infinite;
  animation: pulse 2s linear infinite;
}

@media screen and (max-width: 1620px) {
  .account-section .spark {
    width: 40px;
    height: 40px;
    bottom: 110px;
  }
}

@media screen and (max-width: 1366px) {
  .account-section .spark {
    width: 30px;
    height: 30px;
    bottom: 80px;
  }
}

@media screen and (max-width: 1199px) {
  .account-section .spark {
    width: 30px;
    height: 30px;
    bottom: 80px;
  }
}

.account-section .spark2 {
  position: absolute;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    #ffe2e2 0%,
    rgba(255, 255, 255, 0) 51%,
    rgba(0, 212, 255, 0) 100%
  );
  left: 22%;
  bottom: 135px;
  opacity: 0.5;
  -webkit-animation: pulse 2s linear infinite;
  animation: pulse 2s linear infinite;
}

@media screen and (max-width: 1620px) {
  .account-section .spark2 {
    width: 40px;
    height: 40px;
    bottom: 110px;
  }
}

@media screen and (max-width: 1366px) {
  .account-section .spark2 {
    width: 30px;
    height: 30px;
    bottom: 80px;
  }
}

@media screen and (max-width: 1199px) {
  .account-section .spark2 {
    left: 30%;
    width: 30px;
    height: 30px;
    bottom: 90px;
  }
}

@-webkit-keyframes pulse {
  0% {
    opacity: 0.2;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 0.2;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.2;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 0.2;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.account-wrapper {
  min-height: 100vh;
  background: #fff;
  padding-left: 120px;
  padding-right: 120px;
  width: 100%;
  position: relative;
  max-width: 720px;
  margin-left: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (max-width: 1399px) {
  .account-wrapper {
    max-width: 640px;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

@media (max-width: 1199px) {
  .account-wrapper {
    max-width: 600px;
    padding-left: 100px;
    padding-right: 100px;
  }
}

@media (max-width: 991px) {
  .account-wrapper {
    max-width: 520px;
    padding-left: 80px;
    padding-right: 80px;
  }
}

@media (max-width: 767px) {
  .account-wrapper {
    max-width: 100%;
  }
}

@media (max-width: 575px) {
  .account-wrapper {
    max-width: 100%;
    padding: 50px 30px;
  }
}

.account-form-wrapper {
  position: relative;
  z-index: 1;
  overflow: hidden;
  overflow-y: auto;
}

.account-form-wrapper p a {
  margin-top: 10px;
  border-radius: 25px;
  padding: 8px 20px;
  line-height: 1;
  border: 1px solid rgba(31, 31, 31, 0.1);
  margin-left: 10px;
}

.account-form-wrapper p a:hover {
  color: #0e9e4d;
  border-color: #0e9e4d;
}

.account-header {
  margin-bottom: 30px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.account-header .title {
  margin-bottom: 5px;
  color: #0e9e4d;
}

.account-form {
  z-index: 1;
}

.account-form .form--group {
  margin-bottom: 25px;
}

.account-form .form--group label {
  color: #1f1f1f;
}

.account-form .form--group label span {
  color: #f53b57;
}

.account-form .form--group .form--control {
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  padding-left: 0;
  border: none;
  background: transparent;
  border-radius: 0;
  border-bottom: 1px solid rgba(27, 39, 61, 0.25);
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.account-form .form--group .form--control:focus {
  border-color: rgba(14, 158, 77, 0.9);
}

.account-form .form--group ::-webkit-input-placeholder {
  color: #777;
}

.account-form .form--group .account-button {
  height: 45px;
  margin-top: 10px;
  max-width: 200px;
  width: 100%;
  -webkit-box-shadow: 0 0 10px rgba(14, 158, 77, 0.5);
  box-shadow: 0 0 10px rgba(14, 158, 77, 0.5);
}

.account-form .form--group .account-button:hover {
  -webkit-box-shadow: 0 0 10px 1px rgba(14, 158, 77, 0.7);
  box-shadow: 0 0 10px 1px rgba(14, 158, 77, 0.7);
}
</style>
