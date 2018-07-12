// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI)

// 全局样式
import '@/styles/index.scss'

// 使用icon
import Icon from 'vue-svg-icon/Icon.vue'
Vue.component('icon', Icon)

// 使用重定向白名单
// import '@/utils/permission.js'

// 使用自己封装的Button
import MyButton from '@/components/Button'
Vue.use(MyButton)

// 使用自己封装的demosel
import DemoSec from '@/components/DemoSec'
Vue.use(DemoSec)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
