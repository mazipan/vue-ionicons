import IosFlagOutlineIcon from './ios-flag-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFlagOutlineIcon.name, IosFlagOutlineIcon)
  }
}
IosFlagOutlineIcon.install = plugin.install

export default IosFlagOutlineIcon
