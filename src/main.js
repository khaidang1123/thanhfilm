import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch, faBell, faHome, faClockRotateLeft as history, faBars, faFire,
    faStar, faFilm, faUser, faAngleDown, faHeart, faTimes, faPaperPlane
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import FilmDetailComponent from './components/FilmDetailComponent.vue'
import ClientLayout from './layouts/ClientLayout.vue'
const $ = require('jquery');
const routes = [
    {
        path: '/', component: ClientLayout, children: [
            { path: "", component: HomeComponent },
            { path: '/phim/:slug', component: FilmDetailComponent },
        ]
    },
    { path: '/:catchAll(.*)', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

library.add(faSearch, faBell, faHome, history, faBars, faFire,
    faStar, faFilm, faUser, faAngleDown, faHeart, faFacebook, faGoogle, faTimes, faPaperPlane)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false;
app.use(router, $)
app.mount('#app')
