import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactList from './components/ContactList'


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: ContactList
    }
]

const router = new VueRouter({
    routes
});

export default router;