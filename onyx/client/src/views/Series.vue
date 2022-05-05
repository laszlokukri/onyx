<template>
  <div class="home">
    <div class="mx-auto" style="max-width: 80rem;">
      <ul>
        <li v-for="srs in series" :key="srs._id">
          <router-link :to="{name: 'Movie', params: { movieId : srs._id}}" class="text-decoration-none"><poster :title="srs.name" :bck="srs.p_url" /></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Poster from '@/components/Poster.vue'

export default {

  components: {
    Poster
  },

  data() {
    return{
      series: []
    }
  },

  created() {
    axios.get('http://localhost:5000/api/movies/series')
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
