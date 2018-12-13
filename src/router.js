import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactList from './components/ContactList';
import Login from './components/Auth/Login';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: ContactList
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;