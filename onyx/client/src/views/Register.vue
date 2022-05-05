<template>
    <div class="mx-auto" style="width: 20rem;">
        <form @submit.prevent="registerUser">
            <div class="mb-3">
                <label for="username" class="form-label">Felhasználónév</label>
                <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Név</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Jelszó</label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <div class="mb-3">
                <label for="confirm_password" class="form-label">Jelszó megerősítése</label>
                <input type="password" class="form-control" id="confirm_password" v-model="confirm_password">
            </div>
            <input type="submit" class="btn btn-primary text-white " style="background-color: black; border-color: #F24405;" value="Regisztráció">
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default{
    data() {
        return {
            username: "",
            password: "",
            confirm_password: "",
            email: "",
            name: ""
        }
    },
    methods: {
        ...mapActions(['register']),
        registerUser(){
            let user = {
                username: this.username,
                name: this.name,
                password: this.password,
                confirm_password: this.confirm_password,
                email: this.email,
            }
            this.register(user).then(res => {
                if(res.data.success){
                    this.$router.push("bejelentkezes");
                }
            })
        }
    },
}
</script>

<style scoped>

</style>
