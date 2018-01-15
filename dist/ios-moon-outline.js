import IosMoonOutlineIcon from './ios-moon-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMoonOutlineIcon.name, IosMoonOutlineIcon)
  }
}
IosMoonOutlineIcon.install = plugin.install

export default IosMoonOutlineIcon
