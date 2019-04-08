<template>
  <v-text-field
    v-model="searchItem"
    solo
    flat
    label="Search a movie?"
    :class="['mx-3','searchbar']"
    @keyup.enter="handleSelect"
  >
    <template v-slot:append>
      <v-fade-transition leave-absolute>
        <v-layout align-center justify-space-around>
          <v-btn color="cyan" fab small dark @click="handleSelect">
            <v-icon>search</v-icon>
          </v-btn>
        </v-layout>
      </v-fade-transition>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      loading: true,
      results: [],
      searchItem: ""
    };
  },
  methods: {
    handleSelect(item) {
      this.$router.push({
        name: "SearchResult",
        query: { q: this.searchItem, page: 1 }
      });
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbar {
  max-width: 600px;
}
</style>
