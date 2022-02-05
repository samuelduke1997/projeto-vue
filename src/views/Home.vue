<template>
  <div>
    <Banner :banners="banners"></Banner>
    <h1>This is a home page</h1>
  </div>
</template>

<script>
import Banner from "@/common/components/Banner";
export default {
  name: "Home",
  components: { Banner },

  data() {
    return {
      banners: [
        "https://picsum.photos/1440/250",
        "https://picsum.photos/1441/250",
        "https://picsum.photos/1442/250",
      ],
    };
  },
};
</script>
