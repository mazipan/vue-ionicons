import FlagIcon from './flag.vue'

const plugin = {
  install: Vue => {
    Vue.component(FlagIcon.name, FlagIcon)
  }
}
FlagIcon.install = plugin.install

export default FlagIcon
