import IosBellIcon from './ios-bell.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBellIcon.name, IosBellIcon)
  }
}
IosBellIcon.install = plugin.install

export default IosBellIcon
