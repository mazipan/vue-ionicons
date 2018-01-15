import SkipForwardIcon from './skip-forward.vue'

const plugin = {
  install: Vue => {
    Vue.component(SkipForwardIcon.name, SkipForwardIcon)
  }
}
SkipForwardIcon.install = plugin.install

export default SkipForwardIcon
