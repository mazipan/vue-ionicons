import HeartBrokenIcon from './heart-broken.vue'

const plugin = {
  install: Vue => {
    Vue.component(HeartBrokenIcon.name, HeartBrokenIcon)
  }
}
HeartBrokenIcon.install = plugin.install

export default HeartBrokenIcon
