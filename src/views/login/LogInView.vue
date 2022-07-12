<template>
  <div id="login" class="d-flex flex-column justify-content-center align-items-center">
    <b-card class="login-card" header-bg-variant="info" header-text-variant="white" header="Kymatio - login">
      <b-card-text>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="email" class="pt-2" label="Email" label-for="email-input">
            <b-form-input id="email-input" v-model="form.email" type="text" placeholder="Enter email"></b-form-input>
          </b-form-group>
          <b-form-group id="password" class="pt-2" label="Password" label-for="password-input">
            <b-form-input id="password-input" v-model="form.password" type="password"></b-form-input>
          </b-form-group>
          <div class="pt-4">
            <b-button class="submit-btn p-2" type="submit" variant="outline-info">Submit</b-button>
            <b-button class="reset-btn p-2" type="reset" variant="outline-danger">Reset</b-button>
          </div>
        </b-form>
      </b-card-text>
    </b-card>
    <b-alert class="login-errors mt-2" v-model="errors.length" variant="danger">
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "LogInComponent",
  data() {
    return {
      errors: [],
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit(event) {
      this.errors = [];

      if (this.form.email && this.form.password) {
        this.$router.push("/dashboard");
      }

      if (!this.form.email) {
        this.errors.push("Email required.");
      }
      if (!this.form.password) {
        this.errors.push("Password required.");
      }

      event.preventDefault();
    },
    onReset() {
      this.form = {
        email: null,
        password: null,
      };
    },
  },
};
</script>

<style scoped>
#login {
  height: 100vh;
}
.submit-btn,
.reset-btn {
  border: none;
}
</style>
