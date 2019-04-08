<template>
  <div class="movie-container" v-if="movie"  :style="{ backgroundSize: 'cover',backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.6) 60%, rgba(255,255,255,0.3)), url('${movie.poster_url}')` }">
    
      <v-container grid-list-md>
        <v-layout pa-2 fill-height row wrap class="lightbox white--text">
          <v-flex lg6>
            <v-flex>
              <h1>
                <a v-if="movie.homepage" :href="movie.homepage" target="_blank">{{movie.title}}</a>
                <template v-else>{{movie.title}}</template>
              </h1>
              <p>Rate: {{movie.vote_average}}</p>
              <p>Released Date: {{movie.release_date}}</p>
              <p>Language: {{movie.original_language}}</p>
            </v-flex>
            <v-flex>
              <h2>Overview</h2>
              <p>{{movie.overview}}</p>
            </v-flex>
            <v-flex>
              <h2>Casts</h2>
              <div v-for="(cast) in casts" :key="cast.name">
                <span>{{cast.name}}</span>
              </div>
            </v-flex>
          </v-flex>
          <v-flex lg6>
            <v-responsive :aspect-ratio="16/9">
              <iframe
                v-if="movie.videos.results[0]"
                width="100%"
                height="100%"
                :src="`https://www.youtube.com/embed/${movie.videos.results[0].key}`"
              ></iframe>
            </v-responsive>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <Carousel :items="backdrops" v-if="backdrops"></Carousel>
      </v-container>
 
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  name: "MoviePage",
  components: {
    Carousel
  },
  props: {},
  data() {
    return {
      movie: null,
      backdrops: [],
      casts: [],
      carouselIndex: 0,
      carouselHeight: 500
    };
  },
  computed: {
    movieId() {
      return this.$route.params.movieId;
    },
    movieInfoUrl() {
      return `/movie/${
        this.movieId
      }?append_to_response=credits,images,lists,releases,recommendations,videos`;
    }
  },
  methods: {
    formatResult(results) {
      return results.map(result => {});
    },
    formatBackdrops(backdrops) {
      if (backdrops.length > 5) {
        backdrops = backdrops.slice(0, 5);
      }

      return backdrops.map(backdrop => {
        const additions = {
          src: `https://image.tmdb.org/t/p/original${backdrop.file_path}`
        };
        return { ...backdrop, ...additions };
      });
    },
    getMovieInfo() {
      this.axios.get(this.movieInfoUrl).then(response => {
        const additions = {
          poster_url: `https://image.tmdb.org/t/p/original${
            response.poster_path
          }`
        };
        this.movie = { ...response, ...additions };
        this.backdrops = this.formatBackdrops(this.movie.images.backdrops);
        this.casts = this.movie.credits.cast.slice(0, 5);
      });
    }
  },
  mounted() {
    this.getMovieInfo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
