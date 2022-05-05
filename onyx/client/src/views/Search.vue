<template>
    <div class="mx-auto" style="max-width: 80rem;">
      <ul>
        <li v-for="movie in movies" :key="movie._id">
          <router-link :to="{name: 'Movie', params: { movieId : movie._id}}" class="text-decoration-none"><poster :title="movie.name" :bck="movie.p_url" /></router-link>
        </li>
        <li v-for="srs in series" :key="srs._id">
          <router-link :to="{name: 'Movie', params: { movieId : srs._id}}" class="text-decoration-none"><poster :title="srs.name" :bck="srs.p_url" /></router-link>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
import Poster from '@/components/Poster.vue'

export default {
  name: 'Search',
  components: {
    Poster
  },

  data() {
    return{
      movies: [],
      series: []
    }
  },
  watch: {
    "$route.params.srcT"(value){
        axios.get('http://localhost:5000/api/movies/src/' +  value)
          .then(response => this.movies = response.data)
          .catch(err => console.log(err))
        axios.get('http://localhost:5000/api/movies/src/series/' +  value)
          .then(response => this.series = response.data)
          .catch(err => console.log(err))
    }
  },
  created() {
    axios.get('http://localhost:5000/api/movies/src/' +  this.$route.params.srcT)
      .then(response => this.movies = response.data)
      .catch(err => console.log(err))
    axios.get('http://localhost:5000/api/movies/src/series/' +  this.$route.params.srcT)
      .then(response => this.series = response.data)
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>

ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

li {
  float: left;
  cursor: pointer;
}

</style>