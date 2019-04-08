<template>
  <v-pagination v-model="currentPage" :length="totalPages" :total-visible="7"></v-pagination>
</template>

<script>
export default {
  name: "Pagination",
  components: {},
  data() {
    return {
      currentPage: this.$props.page
    };
  },
  props: {
    totalPages: Number,
    page: Number,
  },
  methods: {},
  watch: {
    currentPage: function() {
      this.$emit("pageChange", this.currentPage);
    }
  }
};
</script>

<style scoped>
</style>
