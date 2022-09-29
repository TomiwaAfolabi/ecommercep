<template>
  <div
    class="w-screen bg-sky-900 flex justify-between fixed mb-8"
    :tabName="tabName"
  >
    <div>
      <img class="w-16 m-1" src="../../assets/logo.png" />
    </div>
    <div class="flex justify-end">
      <ul class="flex space-x-8 pr-20 font-Courgette">
        <li
          class="bg-blue w-auto h-auto 2 p-6 bg-blue-50 hover:skew-x-12 cursor-default"
        >
          <router-link to="/">Home</router-link>
        </li>
        <li
          class="bg-blue w-auto h-auto 2 p-6 bg-blue-50 hover:skew-x-12 cursor-default"
        >
          <router-link to="/login">Login</router-link>
        </li>
        <li
          class="bg-blue w-auto h-auto 2 p-6 bg-blue-50 hover:skew-x-12 cursor-default"
        >
          About
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      tabName: "login",
    };
  },
};
</script>
