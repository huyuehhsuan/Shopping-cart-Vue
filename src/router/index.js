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
            {
                path: '/ProductDetial',
                name: 'ProductDetial',
                component: () =>
                    import ( /* webpackChunkName: "log_in" */ '../views/Product/ProductDetial.vue')
            },
            {
                path: '/About',
                name: 'About',
                component: () =>
                    import ( /* webpackChunkName: "log_in" */ '../views/About.vue')
            }

        ]
    },



]

const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
    // 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}

export default router