import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '学生',
      component: () => import('@/views/nested/menu1/index'),
      meta: { title: '学生首页', icon: '首页' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '教师界面', icon: '教师' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '题目列表', icon: '教师' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '发布通知', icon: '教师' }
      },
      {
        path: 'inform',
        name: 'Inform',
        component: () => import('@/views/inform/index'),
        meta: { title: '通知管理', icon: '教师' }
      },
      {
        path: 'create',
        name: '添加题库',
        component: () => import('@/views/questionbank/create/index'),
        meta: { title: '添加题库', icon: '教师' }
      }
      ,
      {
        path: 'resource',
        name: '资源发布',
        component: () => import('@/views/resource/index'),
        meta: { title: '资源发布', icon: '教师' }
      },
      {
        path: 'resourcelist',
        name: '资源列表',
        component: () => import('@/views/resource/list/index'),
        meta: { title: '资源列表', icon: '教师' }
      }
    ]
  },


  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '学生界面',
      icon: '学生'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '学生首页', icon: '学生' },


      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '题目列表', icon: '学生' }
      },
      {
        path: 'menu3',
        component: () => import('@/views/nested/menu3/index'),
        name: 'Menu3',
        // meta: { title: '题目展示', icon: '学生' }
      }, {
        path: 'menu4',
        component: () => import('@/views/nested/menu4/index'),
        name: 'Menu4',
        meta: { title: '知识点库', icon: '学生' }
      }, {
        path: 'menu5',
        component: () => import('@/views/nested/menu5/index'),
        name: 'Menu5',
        meta: { title: '问答库', icon: '学生' }
      }, {
        path: 'menu6',
        component: () => import('@/views/nested/menu6/index'),
        name: 'Menu6',
        meta: { title: '预习功能', icon: '学生' }
      }
      , {
        path: 'menu7',
        component: () => import('@/views/nested/menu7/index'),
        name: 'Menu7',
        // meta: { title: '问答库详细页面', icon: '学生' }
      }, {
        path: 'menu8',
        component: () => import('@/views/nested/menu8/index'),
        name: 'Menu8',
        // meta: { title: '我要提问', icon: '学生' }
      }, {
        path: 'menu9',
        component: () => import('@/views/nested/menu9/index'),
        name: 'Menu9',
        // meta: { title: '预习界面', icon: '学生' }
      }
    ]
  },



  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'hash', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
