import IosPawOutlineIcon from './ios-paw-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPawOutlineIcon.name, IosPawOutlineIcon)
  }
}
IosPawOutlineIcon.install = plugin.install

export default IosPawOutlineIcon
