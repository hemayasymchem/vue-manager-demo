import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  // { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/product',
    name: 'Home'
  },

  {
    path: '/product',
    component: Layout,
    redirect: '/product/product-single',
    name: 'ProductManagement',
    meta: { title: '商品管理', icon: '' },
    children: [
      {
        path: 'product-single',
        name: 'ProductSingle',
        component: () => import('@/views/product/product-single/index'),
        meta: { title: '单品推荐管理', icon: 'eye' }
      },
      {
        path: 'product-special',
        name: 'ProductSpecial',
        hidden: false,
        component: () => import('@/views/product/product-special/index'),
        meta: { title: '专题推荐管理', icon: 'info'}
      },
      {
        path: 'product-specialContent', // 专题推荐管理的编辑页面
        name: 'ProductSpecialContent',
        hidden: true,
        component: () => import('@/views/product/product-special/content.vue'),
      },
      {
        path: 'product-addSpecial', // 新增专题页面
        name: 'ProductAddSpecial',
        hidden: true,
        component: () => import('@/views/product/product-special/addSpecial.vue'),
      },
      {
        path: 'product-addSingle',
        name: 'ProductAddSingle',
        hidden: true,
        component: () => import('@/views/product/product-special/addSingle.vue'),
      },
    ]
  },
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/main',
    name: 'StatisticsManagement',
    meta: { title: '统计管理', icon: '' },
    children: [
      {
        path: 'main',
        name: 'statistics',
        component: () => import('@/views/statistics/index'),
        meta: { title: '统计管理主页', icon: 'eye' }
      },
    ]
  },
  {
    path: '/person',
    component: Layout,
    redirect: '/person/main',
    name: 'PersonManager',
    meta: { title: '个人中心', icon: '' },
    children: [
      {
        path: 'main',
        name: 'personMain',
        component: () => import('@/views/person/index'),
        meta: { title: '个人中心管理页', icon: 'eye' }
      },
      {
        path: 'password',
        name: 'personPassword',
        component: () => import('@/views/person/password.vue'),
        meta: { title: '修改密码', icon: 'eye' },
        hidden: true,
      },
    ]
  },

  // { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

