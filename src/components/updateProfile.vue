<template>
  <div class="card">
    <div class="card-body p-4">
      <form @submit.prevent="updateUser">
        <div class="formbody">
          <ul class="list-inline d-flex gap-4">
            <li class="srch_input_wd">
              <div class="form-group">
                <label for="pname">Name<span>*</span></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Full Name"
                  maxlength="20"
                  v-model.trim="name"
                />
              </div>
            </li>
            <li class="srch_input_age hide">
              <div class="form-group">
                <label for="page">Age<span>*</span></label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Age"
                  maxlength="2"
                  v-model.number="age"
                />
              </div>
            </li>
            <li class="srch_input_gender">
              <label for="pgender">Gender<span>*</span></label
              ><br />
              <label class="radio-inline text-center">
                <input
                  type="radio"
                  name="gender[0]"
                  id="optmale"
                  value="male"
                  checked="checked"
                  v-model="gender"
                />
                M
              </label>
              <label class="radio-inline text-center">
                <input
                  type="radio"
                  name="gender[0]"
                  id="optfemale"
                  value="female"
                  v-model="gender"
                />
                F
              </label>
            </li>
          </ul>
          <div class="pt-4"></div>
          <hr />
          <h5 class="title my-2">Contact Info</h5>
          <ul class="list-inline d-flex gap-4">
            <li class="srch_input_wd">
              <div class="form-group">
                <label for="pname">Mobile No<span>*</span></label>
                <input
                  type="tel"
                  class="form-control"
                  maxlength="25"
                  v-model.number="mobile"
                />
              </div>
            </li>
            <li class="srch_input_age hide">
              <div class="form-group">
                <label for="page"
                  >Email<span class="text-info ms-2">(optional)</span></label
                >
                <input type="email" class="form-control" v-model.trim="email" />
              </div>
            </li>
          </ul>
        </div>
        <button class="h-auto mt-5">Update User</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      gender: "",
      mobile: "",
      email: "",
      formNotValid: false,
      formIsValid: false,
    };
  },
  computed: {
    userInfo() {
      return this.$store.getters["userInfo"];
    },
  },
  methods: {
    async updateUser() {
      if (this.name == "" || this.age == "" || this.mobile == "") {
        this.formNotValid = true;
        this.formIsValid = false;
        return;
      }
      this.formNotValid = false;
      await this.$store.dispatch("updateUser", {
        // For Customer Details
        name: this.name,
        age: this.age,
        gender: this.gender,
        mobile: this.mobile,
        email: this.email,
      });
      this.formIsValid = true;
      this.$router.replace('/user-dashboard')
    },
    async updateForm() {
      this.name = this.userInfo.name;
      this.age = this.userInfo.age;
      this.gender = this.userInfo.gender;
      this.mobile = this.userInfo.mobile;
      this.email = this.userInfo.email;
    },
  },
  created() {
    this.$store.dispatch("loadUser");
    this.updateForm();
  },
};
</script>

<style scoped>
li {
  width: 50%;
}
span {
  color: red;
}
</style>
