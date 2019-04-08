<template>
  <v-card class="card white--text" color="rgba(255,255,255,0.1)" >
    <v-layout row>
      <v-flex xs7>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{title}}</div>
            <div></div>
            <div>{{releaseDate}}</div>
          </div>
        </v-card-title>
      </v-flex>
      <v-flex xs5>
        <v-img :src="src" width="125px" contain @error="failLoadImg"></v-img>
      </v-flex>
    </v-layout>
    <v-divider light></v-divider>
    <v-card-title primary-title>
      <div>
        <p class="overview">{{ overview }}</p>
      </div>
    </v-card-title>
    <v-card-actions class="px-3 pb-3 pt-0 bottomAction" @click="viewMovieInfo">
      <v-btn flat color="white">More Info</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MovieCard",
  components: {},
  data() {
    return {
      src: this.$props.posterUrl
    };
  },
  props: {
    title: String,
    releaseDate: String,
    posterUrl: String,
    overview: String,
    rate: Number
  },
  methods: {
    viewMovieInfo() {
      this.$emit("viewMovieInfo");
    },
    failLoadImg() {
      this.src = "https://via.placeholder.com/125*/000000/FFFFFF/?text=NoImage";
    }
  }
};
</script>

<style scoped>
.overview {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
