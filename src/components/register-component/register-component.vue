<template>
  <!-- Register container -->
  <div
    v-if="reg_show_alert"
    :class="reg_alert_variant"
    class="text-center bg-yellow-50 p-4"
  >
    {{ reg_alert_message }}
  </div>
  <vee-form
    class="w-96 h-96 grid place-items-center bg-sky-900 m-8 p-8"
    :class="hiddenRegClass"
    :validation-schema="schema"
    @submit="register"
    :initial-vaules="userData"
  >
    <div>
      <label> Name: </label>
      <vee-field type="name" name="name" />
      <br />
      <ErrorMessage name="name" class="text-rose-900 ml-20" />
    </div>
    <div>
      <label>Email: </label>
      <vee-field type="email" name="email" />
      <br />
      <ErrorMessage name="email" class="text-rose-900 ml-20" />
    </div>
    <div>
      <label>Password: </label>
      <vee-field name="password" :bails="false" #default="{ field, errors }">
        <input type="password" :="field" />
        <div class="text-rose-900 ml-20" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </vee-field>
      <ErrorMessage name="password" class="text-rose-900 ml-20" />
    </div>
    <div>
      <label>Confirm Password: </label>
      <vee-field type="password" name="confirm_password" />
      <ErrorMessage name="confirm_password" class="text-rose-900 ml-20" />
    </div>
    <div>
      <label>Country: </label>
      <vee-field
        as="select"
        name="country"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="Antartica">Antartica</option>
      </vee-field>

      <ErrorMessage name="country" class="text-rose-900" />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field
        type="checkbox"
        name="tos"
        value="1"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <label class="inline-block">Accept terms of service</label>
      <br />
      <ErrorMessage name="tos" class="text-rose-900" />
    </div>

    <button
      @submit="register"
      class="w-32 bg-orange-700"
      :disabled="reg_in_submission"
    >
      Sign In
    </button>
  </vee-form>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import useModalStore from "../../stores/modal";
export default {
  name: "Register",
  data() {
    return {
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|min:3|max:100|email",
        password: "required|min:6|max:30",
        confirm_password: "password_mismatch:@password",
        country: "required|country_excluded:Antartica",
        tos: "tos",
      },
      userData: {
        country: "USA",
      },
      reg_show_alert: false,
      reg_in_submission: false,
      reg_alert_variant: "bg-sky-900",
      reg_alert_message: "Please wait while registration us being processsed",
    };
  },
  computed: {
    ...mapState(useModalStore, ["hiddenLoginClass", "hiddenRegClass"]),
    ...mapWritableState(useModalStore, ["isLoginOpen", "isRegisterOpen"]),
  },
  methods: {
    toggleRegister() {
      this.isRegisterOpen = !this.isRegisterOpen;
      this.isLoginOpen = false;
    },
    toggleLogin() {
      this.isLoginOpen = !this.isLoginOpen;
      this.isRegisterOpen = false;
    },
    register(values) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;

      this.reg_alert_variant = "bg-green-500";
      this.reg_alert_message = "Account Has been registered successfully";
      console.log(values);
    },
  },
};
</script>
