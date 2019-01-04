import Vue from 'vue'
import App from './App.vue'

/* global process */
if (process.env.NODE_ENV === "production") {
  require("./pwa")
} else {
  Vue.config.devtools = true
}

new Vue({
  el: '#app',
  render: h => h(App)
})