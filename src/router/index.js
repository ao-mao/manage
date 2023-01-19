import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'
import Mall from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'

// 引入组件
Vue.use(VueRouter);


// 1、创建路由与组件
// 2、将路由和组件进行映射

const routes = [
  {
    path: '/',
    component: Main,
    redirect:'/home',//重定向
    children: [
      { path: 'home', name:'home', component: Home },
      { path: 'user', name:'user', component: User },
      { path: 'mall', name:'mall', component: Mall},
      { path: 'page1', name:'page1',  component: PageOne},
      { path: 'page2', name:'page2', component: PageTwo},
    ]
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 暴露router
export default router;