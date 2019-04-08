<template>
  <div>
    <v-toolbar color="#000" class="white--text">
      <v-toolbar-title><a href="/" class="white--text siteTitle"> MovieWorld</a></v-toolbar-title>
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
.siteTitle{
  text-decoration: none;
}
</style>
