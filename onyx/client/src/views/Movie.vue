<template>
    <div class="mx-auto" id="movie" style="max-width: 800px">
        <div class="container" > 
                <div class="row">
                    <div class="col" ><h5><b class="b2">{{movie.name}} ({{movie.year}})</b></h5></div> 
                    <div class="col-md-auto" ><h5> <b class="b2">{{Math.round(movie.score/movie.db *10)/10}}/5 ★</b></h5></div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="my-2"><b class="b2">Rendező:</b> {{movie.dir}}</p>
                        <p class="my-2"><b class="b2">Leírás:</b> {{movie.desc}}</p>
                    </div>
                    <div class="col-md-auto">
                        <img :src="`${movie.p_url}`" onerror="this.src='http://localhost:5000/static/p_def.png'" class="my-2" style="max-width: 150px; border: 1px solid #F24405;" >
                    </div>
                </div>
                <div class="row" v-if="movie.link || movie.links">
                    <div class="col my-2">
                        <div v-if="!movie.ep">
                            <router-link :to="{name: 'Watch', params: {movieL: movie.link}}" class=" play my-2 text-decoration-none">Lejátszás 🞂</router-link>
                        </div>
                        <div v-else>
                            <ul>
                                <li v-for="(n,k) in movie.links" :key="movie.links[n]" class="my-2">
                                    <router-link :to="{name: 'Watch', params: {movieL: n}}" class=" play text-decoration-none">Ep-{{k + 1}} 🞂</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-auto">
                        <Prof :d='2' :f='movie.name' />
                    </div>
                </div>
                                                                                        
                 
                
         </div>
    </div>
</template>

<script>
import axios from 'axios'
import Prof from '../components/Prof.vue'


export default {
    name: 'Movie',
    components: {
        Prof
    },

    data() {
        return{
            movie: []
        }
    },
    
    created() {
        axios.get('http://localhost:5000/api/movies/' + this.$route.params.movieId)
            .then(response => this.movie = response.data)
            .catch(err => console.log(err))
    }

}
</script>

<style scoped>

b.b2{
    background-color: #F24405;
    padding: 2px;
    color: white;
}
.row{
    color: white;
    background-color: #404040;
}
h5{
    margin-bottom: 0px;
}
.play{
    padding: 4px;
    background-color: #F24405;
    border-color: #A62F03;
    border-radius: 10px;
}
.play:link{
    color: white;
}
.play:active{
    color: white;
}
.play:hover{
    color: white;
}
.play:visited{
    color: white;
}

#movie {
    margin: 60px;
}

</style>