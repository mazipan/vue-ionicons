import IosBoltIcon from './ios-bolt.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBoltIcon.name, IosBoltIcon)
  }
}
IosBoltIcon.install = plugin.install

export default IosBoltIcon
