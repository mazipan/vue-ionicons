import IosBellOutlineIcon from './ios-bell-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBellOutlineIcon.name, IosBellOutlineIcon)
  }
}
IosBellOutlineIcon.install = plugin.install

export default IosBellOutlineIcon
