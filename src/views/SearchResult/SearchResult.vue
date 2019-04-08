<template>
  <div>
    <div v-if="this.query.q">
      <h2 class="white--text ma-3">Search results for: {{this.query.q}}</h2>
      <template v-if="results.length > 0">
        <v-container grid-list-xl px-0>
          <v-layout row wrap>
            <v-flex md6 sm6 xs12 lg4 v-for="(result) in results" :key="result.id">
              <MovieCard
                class="movieCard"
                :title="result.title"
                :release-date="result.release_date"
                :poster-url="result.poster_url"
                :overview="result.overview"
                :rate="result.vote_average"
                @viewMovieInfo="viewMovieInfo(result)"
              ></MovieCard>
            </v-flex>
          </v-layout>
        </v-container>
        <div class="text-xs-center">
          <Pagination
            :total-pages="totalPages"
            class="pagination"
            @pageChange="onPageChange"
            :page="pageNumber"
          ></Pagination>
        </div>
      </template>
      <template v-else>
        <div class="text-xs-center white--text">
          <h2>No result</h2>
        </div>
      </template>
    </div>
    <div v-else>
      <div class="text-xs-center white--text">
        <h2>Please input search item</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "SearchResult",
  components: {
    Pagination,
    MovieCard
  },
  props: {
    q: String
  },
  data() {
    return {
      loading: true,
      results: [],
      pageNumber: parseInt(this.$route.query.page),
      totalResults: 0,
      totalPages: 0
    };
  },
  computed: {
    searchUrl() {
      return `search/movie?query=${this.query.q}&language=en-US&page=${
        this.query.page
      }&include_adult=false`;
    },
    query() {
      return this.$route.query;
    }
  },
  methods: {
    formatResult(results) {
      return results.map(result => {
        const additions = {
          poster_url: `https://image.tmdb.org/t/p/w185/${result.poster_path}`
        };
        return { ...result, ...additions };
      });
    },
    search() {
      this.axios
        .get(this.searchUrl)
        .then(response => {
          this.results = this.formatResult(response.results);
          this.totalPages = response.total_pages;
          this.totalResults = response.total_results;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    viewMovieInfo(movie) {
      this.$router.push({
        name: "MoviePage",
        params: { movieId: movie.id }
      });
    },
    onPageChange(pageNumber) {
      this.pageNumber = pageNumber;
      this.$router.push({
        name: "SearchResult",
        query: { q: this.query.q, page: this.pageNumber }
      });
    }
  },
  watch: {
    query: function() {
      this.search();
    }
  },
  mounted() {
    this.search();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movieCard {
  height: 100%;
}
</style>
