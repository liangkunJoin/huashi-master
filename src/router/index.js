import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
import  Home from '../views/pictureView/index.vue'
Vue.use(Router)

export const constantRouterMap = [
  { path: '/', component: _import('home/index') }
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
