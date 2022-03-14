import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
                path: '/',
                name: 'Dashboard',
                component: () =>
                    import ( /* webpackChunkName: "cart" */ '../views/Home/Dashboard.vue'),
            }, {
                path: '/Cart',
                name: 'Cart',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "cart" */ '../views/Cart.vue')
            },
            {
                path: '/LogIn',
                name: 'LogIn',
                component: () =>
                    import ( /* webpackChunkName: "log_in" */ '../views/LogIn.vue')
            },
        ]
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router