import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/views/HomePage/HomePage'
import SearchResult from '@/views/SearchResult/SearchResult'
import MoviePage from '@/views/MoviePage/MoviePage'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/search',
        name: 'SearchResult',
        component: SearchResult,
        props: (route) => ({
            query: route.query.q
        })
    },
    {
        path: '/movie/:movieId',
        name: 'MoviePage',
        component: MoviePage,
    }, {
        path: '*',
        redirect: '/',
    }
];

export default new VueRouter({
    routes: routes,
    mode: 'history'
});