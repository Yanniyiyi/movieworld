<template>
  <div id="app">
    <v-app>
      <Navbar></Navbar>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style scoped>
#app {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1)
  );
}
</style>
