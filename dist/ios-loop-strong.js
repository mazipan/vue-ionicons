import IosLoopStrongIcon from './ios-loop-strong.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosLoopStrongIcon.name, IosLoopStrongIcon)
  }
}
IosLoopStrongIcon.install = plugin.install

export default IosLoopStrongIcon
