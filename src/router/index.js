import VueRouter from 'vue-router'

import Home from '../views/Home/Home'
import User from '../views/User'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {name: 'Home'}
        },
        {
            path: '/table',
            name: 'Home',
            component: Home,
            meta: {layout: 'AppLayout'}
        },
        {
            path: '/table/user/:id',
            name: 'User',
            component: User,
            props: true,
            meta: {layout: 'AppLayout'}
        }
    ],
    mode: 'history'
})

export default router