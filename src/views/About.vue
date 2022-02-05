<template>
  <div class="about">
    <Banner :banners="banners"></Banner>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import Banner from "@/common/components/Banner";
export default {
  name: "About",
  components: { Banner },

  data() {
    return {
      banners: [
        "https://picsum.photos/1442/250",
        "https://picsum.photos/1444/250",
        "https://picsum.photos/1445/250",
      ],
    };
  },
};
</script>
