import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

//token
const token = localStorage.getItem("token");

const app = createApp(App)

app
.use(store)
.use(router)

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$http = axios;
if(token){
    app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token;
}

app.mount('#app')
/*

*/