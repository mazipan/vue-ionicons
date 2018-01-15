import IosPintOutlineIcon from './ios-pint-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPintOutlineIcon.name, IosPintOutlineIcon)
  }
}
IosPintOutlineIcon.install = plugin.install

export default IosPintOutlineIcon
