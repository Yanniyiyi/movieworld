<template>
  <div>
    <v-toolbar color="#000" class="white--text">
      <v-toolbar-title>MovieWorld</v-toolbar-title>
      <search-bar></search-bar>
    </v-toolbar>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  name: "Navbar",
  components: {
    SearchBar
  },
  data() {
    return {

    }
  },
  methods: {
 
  }
};
</script>

<style scoped>
</style>
