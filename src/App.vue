<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      tab_Name: this.tabName,
    };
  },
};
</script>
