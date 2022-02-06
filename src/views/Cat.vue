<template>
  <Banner :banners="banners"></Banner>
  <div class="container">
    <div class="catTitle">
      <h1>{{ id }}</h1>
    </div>
    <div class="catBody">
      <img :src="cat.url" />
    </div>
  </div>
</template>

<script>
import Banner from "@/common/components/Banner";
import { getCatbyID } from "@/services/catAPI.js";

export default {
  name: "Cat",
  components: { Banner },

  data() {
    return {
      banners: [
        "https://picsum.photos/1440/250",
        "https://picsum.photos/1441/250",
        "https://picsum.photos/1442/250",
      ],
      cat: {},
      id: this.$route.params.id,
    };
  },

  created() {
    this.getImages();
  },

  methods: {
    async getImages() {
      const response = await getCatbyID(this.id);
      this.cat = response.cat;
    },
  },
};
</script>
