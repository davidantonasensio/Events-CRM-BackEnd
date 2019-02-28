import Vue from 'vue'
import Home from './views/Home.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/new',
            name:'new',
            component: () => import('./views/New.vue')            
        },
        {
            path:'/viewcostumer',
            name:'viewcostumer',
            component: () => import('./views/ViewCostumer.vue')            
        },
        {
            path:'/edit',
            name:'edit',
            component: () => import('./views/Edit.vue')            
        }
        ,
        {
            path:'/insertinfo',
            name:'insertinfo',
            component: () => import('./views/InsertInfo.vue')            
        }
    ]
})