<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" class="form-home">
      <h4 style="text-align: center">Test form and validation</h4>
      <b-form-group
        label-cols="3"
        label-align="right"
        id="input-group-firstname"
        label="First Name"
        lable-for="input-firstname"
      >
        <b-form-input
          id="input-firstname"
          v-model="form.firstname"
          type="text"
          required
          placeholder="Please fill first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="3"
        label-align="right"
        id="input-group-lastname"
        label="Last Name"
        lable-for="input-firstname"
      >
        <b-form-input
          id="input-lastname"
          v-model="form.lastname"
          type="text"
          required
          placeholder="Please fill last name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="3"
        label-align="right"
        id="input-group-email"
        label="Email"
        label-for="input-mail"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
          placeholder="Please fill Email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="3"
        label-align="right"
        id="input-group-password"
        label="Password"
        label-for="input-password"
      >
        <b-form-input
          id="input-password"
          type="password"
          v-model="form.password"
          required
          placeholder="Please fill password"
          aria-describedby="input-live-feedback-1"
          :state="passwordState"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback-1">Vertify password not match password</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-vertify-password"
        label="Verify Password"
        label-for="input-vertify-password"
        label-cols="3"
        label-align="right"
      >
        <b-form-input
          id="input-vertify-passworf"
          type="password"
          v-model="form.vertifypassword"
          required
          placeholder="Please fill verify password"
          :state="passwordState"
          aria-describedby="input-live-feedback-2"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback-2">Vertify password not match password</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label-cols="3"
        label-align="right"
        id="input-group-gender"
        label="Gender"
        label-for="input-gender"
      >
        <b-form-select
          id="input-gender"
          v-model="form.gender"
          :options="genders"
          required
          placeholder="Please select gender"
        ></b-form-select>
      </b-form-group>

      <b-button class="submit-btn" type="submit" variant="success">Submit</b-button>
    </b-form>
    <b-card class="mt-3" header="Result" v-if="show">
      <pre class="m-0">
        First name: {{form.firstname}}
        Last name: {{form.lastname}}
        E-mail: {{form.email}}
        Gender: {{form.gender}}
      </pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        vertifypassword: "",
        gender: null,
      },
      genders: [
        { value: null, text: "Please select a gender" },
        { value: "male", text: "Male" },
        { value: "female", text: "Female" },
      ],
      show: false,
      passwordState: null,
    };
  },
  computed: {
    checkPassword() {
      return this.passwordState;
    },
  },
  methods: {
    onSubmit(evt) {
      if (this.form.vertifypassword !== this.form.password) {
        this.passwordState = false;
      } else {
        this.passwordState = null;
        this.show = true;
      }
      evt.preventDefault();
    },
    onReset() {},
  },
};
</script>

<style scoped>
.form-home {
  max-width: 600px;
  width: 100%;
  margin: auto;
  background-color: #cedbd9;
  padding: 20px;
  border-radius: 20px;
}
.submit-btn {
  display: block;
  width: 30%;
  margin: auto !important;
}

.form-group {
  font-weight: 700;
}
</style>