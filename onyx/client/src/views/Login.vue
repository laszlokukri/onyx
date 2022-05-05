<template>
    <div class="mx-auto" style="width: 20rem;">
        <form @submit.prevent="loginUser">
            <div class="mb-3">
                <label for="username" class="form-label">Felhasználónév</label>
                <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Jelszó</label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <input type="submit" class="btn btn-primary text-white" style=" background-color: black; border-color: #F24405;" value="Bejelentkezés">
        </form>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default{
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        ...mapActions(['login']),
        loginUser(){
            let user = {
                username: this.username,
                password: this.password
            };
            this.login(user)
            .then(res => {
                if(res.data.success){
                    this.$router.push('/');
                }
            }).catch(err => {
                console.log(err);
            })
        }
    },
}
</script>

<style scoped>

*{
    color: black;
    margin: 5px;
}

h2{
    margin: 30px;
    color: black;
}

input{
    margin: 5px;
}
</style>
