import IosPieOutlineIcon from './ios-pie-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPieOutlineIcon.name, IosPieOutlineIcon)
  }
}
IosPieOutlineIcon.install = plugin.install

export default IosPieOutlineIcon
