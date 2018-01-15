import IosPauseOutlineIcon from './ios-pause-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPauseOutlineIcon.name, IosPauseOutlineIcon)
  }
}
IosPauseOutlineIcon.install = plugin.install

export default IosPauseOutlineIcon
