<template>
  <div class="home">
    <div class="mx-auto" style="max-width: 80rem;">
      <ul>
        <li v-for="movie in movies" :key="movie._id">
          <router-link :to="{name: 'Movie', params: { movieId : movie._id}}" class="text-decoration-none"><poster :title="movie.name" :bck="movie.p_url" /></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Poster from '@/components/Poster.vue'

export default {
  name: 'Home',
  components: {
    Poster
  },

  data() {
    return{
      movies: []
    }
  },

  created() {
    axios.get('http://localhost:5000/api/movies')
      .then(response => this.movies = response.data)
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