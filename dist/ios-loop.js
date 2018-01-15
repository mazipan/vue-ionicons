import IosLoopIcon from './ios-loop.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosLoopIcon.name, IosLoopIcon)
  }
}
IosLoopIcon.install = plugin.install

export default IosLoopIcon
