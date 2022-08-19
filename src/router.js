import { createRouter, createWebHistory } from 'vue-router'

import Books from './views/Books.vue'
import Item from './views/Item.vue' 
import Quotes from './views/Quotes.vue'


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
    history: createWebHistory(),
    routes: routes
})

export default router