import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch, faBell, faHome, faClockRotateLeft as history, faBars, faFire,
    faStar, faFilm, faUser, faAngleDown, faHeart
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import FilmDetailComponent from './components/FilmDetailComponent.vue'
const $ = require('jquery');
const routes = [
    { path: '/', component: HomeComponent },
    { path: '/login', component: LoginComponent },
    {path: '/phim/:slug', component: FilmDetailComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
library.add(faSearch, faBell, faHome, history, faBars, faFire,
    faStar, faFilm, faUser, faAngleDown, faHeart)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false;
app.use(router, $)
app.mount('#app')
