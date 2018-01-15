import IosCopyOutlineIcon from './ios-copy-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCopyOutlineIcon.name, IosCopyOutlineIcon)
  }
}
IosCopyOutlineIcon.install = plugin.install

export default IosCopyOutlineIcon
