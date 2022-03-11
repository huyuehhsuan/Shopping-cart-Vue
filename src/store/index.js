import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}
const localStoragePlugin = store => {
    store.subscribe((mutation, { user }) => {
        // 當執行 setUserData 時才執行以下程式碼
        if (mutation.type === "setUserData" || mutation.type === "removeUserData") {
            window.localStorage.setItem("user", JSON.stringify(user));
        }
    });
};

export default new Vuex.Store({
    plugins: [localStoragePlugin],
    state: {
        cart: [],
        user: {
            account: "",
            password: "",
            isLogin: false
        }
    },
    getters: {
        productQuantity: state => product => {
            const item = state.cart.find(i => i.id === product.id)
            if (item) return item.quantity
            else return null
        },
        cartItems: state => {
            return state.cart
        },
        cartTotal: state => {
            return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
        }
    },
    mutations: {
        setUserData(state, { userData }) {
            state.user.account = userData.account;
            state.user.password = userData.password;
            state.user.isLogin = true;
        },
        removeUserData(state, { userData }) {
            state.user.account = userData.account;
            state.user.password = userData.password;
            state.user.isLogin = false;
        },
        addToCart(state, product) {
            let item = state.cart.find(i => i.id === product.id)
            if (item) {
                item.quantity++
            } else {
                state.cart.push({...product, quantity: 1 })
            }
            updateLocalStorage(state.cart)
        },
        removeFromCart(state, product) {
            let item = state.cart.find(i => i.id === product.id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.cart = state.cart.filter(i => i.id !== product.id)
                }
            }
            updateLocalStorage(state.cart)
        },
        removeAll(state) {
            state.cart = []
            updateLocalStorage(state.cart)
        },
        updateCartFromLocalStorage(state) {
            const cart = localStorage.getItem('cart')
            if (cart) {
                state.cart = JSON.parse(cart)
            }
        }

    }
})