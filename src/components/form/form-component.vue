<template>
  <navigation-component />
  <div class="grid place-items-center h-auto w-screen font-Courgette">
    <!-- Toggle Login And Register Button -->
    <div class="p-5 mt-20 cursor-default">
      <div
        class="bg-sky-900 w-60 h-auto p-4 text-1xl text-center transition-all hover:scale-50 rounded-xl"
        @click.prevent="toggleLogin"
        v-show="showToggle === 'register'"
      >
        Login
      </div>
      <div
        class="bg-sky-900 w-60 h-auto p-4 text-1xl text-center transition-all hover:scale-50 rounded-xl"
        @click="toggleRegister"
        v-show="showToggle === 'login'"
      >
        Register
      </div>
    </div>
    <login></login>
    <register></register>
  </div>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import useModalStore from "../../stores/modal";
import Register from "../register-component/register-component.vue";
import Login from "../sign-in/sign-in-component.vue";
import NavigationComponent from "../navigation/navigation-component.vue";

export default {
  name: "Form",
  data() {
    return {
      showToggle: "login",
    };
  },
  components: {
    Register,
    Login,
    NavigationComponent,
  },
  computed: {
    ...mapState(useModalStore, ["hiddenLoginClass", "hiddenRegClass"]),
    ...mapWritableState(useModalStore, ["isLoginOpen", "isRegisterOpen"]),
  },
  methods: {
    toggleRegister() {
      this.isRegisterOpen = !this.isRegisterOpen;
      this.isLoginOpen = false;
      this.showToggle = "register";
    },
    toggleLogin() {
      this.isLoginOpen = !this.isLoginOpen;
      this.isRegisterOpen = false;
      this.showToggle = "login";
    },
  },
};
</script>
