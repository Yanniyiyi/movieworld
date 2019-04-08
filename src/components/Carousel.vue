<template>
  <v-carousel hide-delimiters v-model="carouselIndex" :height="carouselHeight" ref="carousel">
    <v-carousel-item v-for="(items,i) in items" :key="i" :src="items.src"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "MoviePage",
  components: {},
  props: {
    items: Array
  },
  data() {
    return {
      carouselIndex: 0,
      carouselHeight: 500
    };
  },
  watch: {
    carouselIndex: function() {
      this.carouselHeight =
        this.$refs.carousel.$el.clientWidth /
        this.items[this.carouselIndex].aspect_ratio;
    }
  },
  mounted() {
    this.carouselHeight =
      this.$refs.carousel.$el.clientWidth / this.items[0].aspect_ratio;
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
