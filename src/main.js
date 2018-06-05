import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fonts/bootstrap.min.css';

import Promise from 'promise-polyfill'

import App from './App'
import router from './router/index'

// To add to window
if (!window.Promise) {
  window.Promise = Promise
}


Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
});



Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
