<template>
  <div class="cardDefault">
    <div class="cardHeader">
      <div class="cardTitle">
        <h2>Gato: {{ name }}</h2>
      </div>
    </div>
    <div class="cardBody">
      <img :src="img" />
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
