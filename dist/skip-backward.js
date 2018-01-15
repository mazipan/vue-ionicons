import SkipBackwardIcon from './skip-backward.vue'

const plugin = {
  install: Vue => {
    Vue.component(SkipBackwardIcon.name, SkipBackwardIcon)
  }
}
SkipBackwardIcon.install = plugin.install

export default SkipBackwardIcon
