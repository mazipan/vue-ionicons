import IosFlagIcon from './ios-flag.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFlagIcon.name, IosFlagIcon)
  }
}
IosFlagIcon.install = plugin.install

export default IosFlagIcon
