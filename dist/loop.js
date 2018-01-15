import LoopIcon from './loop.vue'

const plugin = {
  install: Vue => {
    Vue.component(LoopIcon.name, LoopIcon)
  }
}
LoopIcon.install = plugin.install

export default LoopIcon
