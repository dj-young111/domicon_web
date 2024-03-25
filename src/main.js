import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

import App from './App.vue'
import Antd from 'ant-design-vue/es';
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'

import i18n from './locales'

import './global.scss'
import './fonts/font.css'

Vue.config.productionTip = false
VueClipboard.config.autoSetContainer = true

Vue.use(Antd)
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
