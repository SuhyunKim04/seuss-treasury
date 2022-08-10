import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import Books from './views/Books.vue'
import Item from './views/Item.vue' 
import Quotes from './views/Quotes.vue'
import reset from '/reset.css'
import style from '/style.css'

const routes = [
    {
        path: '/',
        component: Books,
        props: true
    },
    {
        path: '/book/:id',
        component: Item,
        props: true
    },
    {
        path: '/quotes',
        component: Quotes,
        props: true
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


createApp(App).use(router).mount('#app')
