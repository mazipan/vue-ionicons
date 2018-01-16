import Vue from 'vue'
import App from './App.vue'

import ioniconsPlugin from '../dist/ionicons.js'
Vue.use(ioniconsPlugin.AlertCircledIcon)

/* global process */
if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
