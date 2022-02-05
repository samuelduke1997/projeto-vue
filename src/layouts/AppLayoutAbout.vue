<template>
  <div>
    <header class="header">
      <AppLayoutLinks />
    </header>
    <slot />
  </div>
</template>

<script>
import AppLayoutLinks from "@/layouts/AppLayoutLinks";
export default {
  name: "AppLayoutAbout",
  components: { AppLayoutLinks },
};
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: green;
}
</style>
