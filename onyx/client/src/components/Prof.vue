<template>
    <b>
        <template v-if="user">
            <router-link class="nav-link" to="/filmfel" v-if="user.username == 'admin' && d == 0" style=" color: #F24405;">Film feltöltése</router-link>
            <a v-if="d == 1">{{user.username}}</a>
            <div v-if="d == 2 && f">
                <div v-if="ratingEn(user.username, f)">
                    <form @submit.prevent="rate(user.username,f)" class="my-2">
                        <select name="star" id="star" class="form-select form-select-sm" v-model="star">
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5" selected>⭐⭐⭐⭐⭐</option>
                        </select>
                        <input type="submit" class="btn btn-primary" style="width:100%; background-color: black; border-color: #F24405;" value="Értékelem">
                    </form>
                </div>
            </div>
        </template>
    </b>
</template>

<script>
import { mapActions, mapGetters} from "vuex";
import axios from 'axios'

export default {
    name: 'Prof',
    props: {
        d: Number,
        f: String
    },
    data() {
        return {
            rtgEn: false,
            star: 5
        }
    },
    computed:mapGetters(["user"]),
    methods: {
        ...mapActions(["getProfile"]),
        ratingEn(uname, fname){
            axios.get('http://localhost:5000/api/movies/ratingen/' + uname + '/' + fname)
                .then(response => this.rtgEn = response.data)
                .catch(err => console.log(err))
            return this.rtgEn
        },
        rate(usrname, fname){
            const rtg = {
                uname: usrname,
                star: this.star,
                fn: fname 
            }
            axios.post('http://localhost:5000/api/movies/rate/', rtg)
                .then(response => console.log(response))

            this.rtgEn = false;
        }
    },
    created() {
        this.getProfile();
    },
    
}
</script>
