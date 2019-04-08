<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar color="cyan" dark>
        <v-toolbar-title>Trending search this week</v-toolbar-title>
      </v-toolbar>
      <v-list class="white--text trendingList">
        <template v-for="(search, index) in trendingSearch">
          <v-list-tile @click="handleSelect(search.title)" :key="index">
            <v-list-tile-content>
              <v-list-tile-title v-html="search.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      trendingMovieUrl: "/trending/movie/day",
      trendingSearch: []
    };
  },
  methods: {
    formatResults(results) {
      return results.map((result, index) => {
        return { title: result.original_title };
      });
    },
    loadTrendingSearch() {
      this.axios.get(this.trendingMovieUrl).then(response => {
        this.trendingSearch = this.formatResults(response.results);
      });
    },
    handleSelect(keyworld) {
      this.$router.push({
        name: "SearchResult",
        query: { q: keyworld, page: 1 }
      });
    }
  },
  mounted() {
    this.loadTrendingSearch();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trendingList {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
