import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Cart',
        name: 'Cart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
<<<<<<< HEAD
            import ( /* webpackChunkName: "recipe" */ '../views/Cart.vue')
=======
            import ( /* webpackChunkName: "cart" */ '../views/Cart.vue')
>>>>>>> 584988bc31ad041eb022b4cf7bc2409b27e42344
    },
    {
        path: '/LogIn',
        name: 'LogIn',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
<<<<<<< HEAD
            import ( /* webpackChunkName: "recipe" */ '../views/LogIn.vue')
=======
            import ( /* webpackChunkName: "log_in" */ '../views/LogIn.vue')
>>>>>>> 584988bc31ad041eb022b4cf7bc2409b27e42344
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router