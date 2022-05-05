<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav mrgl">
          <a class="navbar-brand" style="color: #F24405;"><b>ONYX</b></a>
          <router-link to="/" class="nav-link hvr" style="text-decoration: none;">Filmek</router-link>
          <router-link to="/sorozatok" class="nav-link hvr">Sorozatok</router-link>
        </div>
        <div class="navbar-nav ms-auto mrgr">
          <form class="form-inline" @submit.prevent="srcF" >
              <input class="form-control" type="search" id="search" v-model="search" placeholder="Keresés" aria-label="Search">       
          </form>
          <template v-if="isLoggedIn">
            <Prof :d="0"/>
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle hvr" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown"><Prof :d="1"/></a>              
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarScrollingDropdown">
                <router-link to="/profil" class="dropdown-item">Profil</router-link>
                <router-link to="/" class="dropdown-item" @click.prevent="logoutUser">Kijelentkezés</router-link>
              </div>
            </div>
           </template>
          <template v-else>
            <router-link to="/regisztracio" class="nav-link hvr">Regisztráció</router-link>
            <router-link to="/bejelentkezes" class="nav-link hvr">Bejelentkezés</router-link> 
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Prof from './Prof.vue';


export default {
  components: { Prof },
    name: 'Nav',
    data() {
      return {
        search: ""
      }
    }, 
    computed: {
        ...mapGetters(["isLoggedIn"]),
    },
    methods: {
        ...mapActions(["logout"]),
        logoutUser(){
            this.logout();
        },
        srcF(){
          let src = this.search;
          this.$router.push({name:'Search',  params: {srcT: src}});
        }
    },
};
</script>

<style scoped>

.navbar{
  background-color: #404040;
  color: #F2E205;
}

.hvr{
  color: #F24405;
  text-decoration: none;
}
.hvr:link{
  color: #F24405;
}
.hvr:hover{
  background-color: black;
  color: #F24405;
}
.hvr:active{
  color: #F24405; 
}
.hvr:visited{
  color: #F24405;
}
.mrgr{
  margin-right: 10%;
}
.mrgl{
  margin-left: 10%;
}
input[type="search"]{

  border: 2px solid #A62F03;
  border-radius: 10px;
}
input[type="search"]:focus{
  border-color: #F24405;
  box-shadow : 0 0 4px black;
}

</style>