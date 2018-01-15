import ForkIcon from './fork.vue'

const plugin = {
  install: Vue => {
    Vue.component(ForkIcon.name, ForkIcon)
  }
}
ForkIcon.install = plugin.install

export default ForkIcon
