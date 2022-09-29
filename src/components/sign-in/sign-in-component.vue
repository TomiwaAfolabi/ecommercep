<template>
  <div
    v-if="login_show_alert"
    :class="login_show_variant"
    class="text-center bg-yellow-50 p-4"
  >
    {{ login_show_messgae }}
  </div>
  <!-- Login Form -->
  <vee-form
    class="w-96 h-80 grid place-items-center bg-sky-900"
    :class="hiddenLoginClass"
    :validation-schema="loginSchema"
    @submit="login"
  >
    <div class="flex space-x-9">
      <label> Email: </label>
      <vee-field type="email" name="email" />
    </div>
    <ErrorMessage name="email" class="text-rose-900 ml-20" />

    <div class="flex space-x-4">
      <label>Password: </label>
      <vee-field type="password" name="password" />
    </div>
    <ErrorMessage name="password" class="text-rose-900 ml-20" />

    <button
      @submit="login"
      class="w-32 bg-orange-700"
      :disabled="login_in_submission"
    >
      Sign In
    </button>
  </vee-form>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import useModalStore from "../../stores/modal";
export default {
  name: "Login",
  data() {
    return {
      loginSchema: {
        email: "required|email",
        password: "required|min:6|max:100",
      },
      login_in_submission: false,
      login_show_alert: false,
      login_show_variant: "bg-sky-900",
      login_show_messgae: "Login in process",
    };
  },
  computed: {
    ...mapState(useModalStore, ["hiddenLoginClass"]),
    ...mapWritableState(useModalStore, ["isLoginOpen"]),
  },
  methods: {
    login(values) {
      (this.login_in_submission = true),
        (this.login_show_alert = true),
        (this.login_show_variant = "bg-green-500");
      this.login_show_messgae = "Login Successfull";
      console.log(values);
    },
  },
};
</script>
