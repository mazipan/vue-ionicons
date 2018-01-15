import IosMoonIcon from './ios-moon.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMoonIcon.name, IosMoonIcon)
  }
}
IosMoonIcon.install = plugin.install

export default IosMoonIcon
