import Vue from 'vue'
import Router from 'vue-router'

// 导入 .vue
import Home from '@/components/home/Home'
import Recom from '@/components/home/topChange/Recom'
import Normal from '@/components/home/topChange/Normal'
import Good from '@/components/subComponents/Good'
import Category from '@/components/home/Category'
import Cart from '@/components/home/Cart'
import Me from '@/components/home/Me'
import Login from '@/components/home/Login'
import Regist from '@/components/home/Regist'
import Test from '@/components/home/Test'

Vue.use(Router)

export default new Router({
    routes: [
        {path:'/',redirect: '/recom'},
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                // 子路由的 path 前面，不要带斜线，否则永远以 root 开始请求
                {path: 'recom', component: Recom},
                {path: 'normal', component: Normal}
            ]},
        {path:'/good',component: Good},
        {path:'/category',component: Category},
        {path:'/cart',component: Cart},
        {path:'/me',component: Me},
        {path:'/login',component: Login},
        {path:'/regist',component: Regist},
        {path:'/test',component: Test},
    ],
    // linkActiveClass: 'my-active'
})
