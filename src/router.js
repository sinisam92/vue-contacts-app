import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactList from './components/ContactList';
import Login from './components/Auth/Login';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: ContactList,
        name: 'home'
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            guest: true
        },
        
    },
    // {
    //     path:'*',
    //     name: 'not-found',
    //     component: ContactList
    // }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
  const isAuthenticated =  !!localStorage.getItem('token');
  if (isAuthenticated && to.meta.guest) {
       return next({ name: 'home'});
  }
  if (!isAuthenticated && !to.meta.guest) {
    return next({ name: 'login'});
  }
    return next();
});


export default router;