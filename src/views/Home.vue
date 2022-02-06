<template>
  <Banner :banners="banners"></Banner>
  <div class="container">
    <div class="listCats">
      <CardDefault
        :name="item.id"
        :img="item.url"
        v-for="item in images"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script>
import Banner from "@/common/components/Banner";
import CardDefault from "@/common/components/CardDefault";
import getCats from "@/services/catAPI.js";
import "@/styles/views/home.scss";

export default {
  name: "Home",
  components: { Banner, CardDefault },

  data() {
    return {
      images: [],
      order: "",
      page: 100,
      limit: 3,
      pagination_count: 0, //default until we get a result with the 'Pagination-Count' header in the response
      banners: [
        "https://picsum.photos/1440/250",
        "https://picsum.photos/1441/250",
        "https://picsum.photos/1442/250",
      ],
    };
  },

  created() {
    this.getImages();
  },

  methods: {
    async getImages() {
      let query_params = {
        limit: this.limit,
        order: this.order,
        page: this.page - 1,
      };

      const cats = await getCats(query_params);
      this.images = cats.images;
      this.pagination_count = cats.pagination_count;
      console.log(this.images);
    },
  },
};
</script>
