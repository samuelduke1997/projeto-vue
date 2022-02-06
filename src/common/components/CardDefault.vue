<template>
  <div class="cardDefault">
    <div class="cardHeader">
      <div class="cardTitle">
        <router-link :to="/cat/ + name"
          ><h2>Gato: {{ name }}</h2></router-link
        >
      </div>
    </div>
    <div class="cardBody">
      <router-link :to="/cat/ + name"> <img :src="img" /></router-link>
    </div>
  </div>
</template>

<script>
import "@/styles/components/cardDefault.scss";
export default {
  name: "CardDefault",
  components: {},
  props: {
    name: String,
    img: String,
  },

  data() {
    return {};
  },

  created() {},
};
</script>
