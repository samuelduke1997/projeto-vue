<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import "@/styles/shared.scss";
export default {
  name: "AppLayoutLinks",
};
</script>

<style scoped>
#nav {
  padding: 30px;
}
</style>
