<template>
  <carousel :items-to-show="1">
    <slide v-for="slide in banners" :key="slide">
      <img :src="slide" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import "@/styles/components/banner.scss";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "Banner",
  props: {
    banners: Array,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
