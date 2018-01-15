import LockCombinationIcon from './lock-combination.vue'

const plugin = {
  install: Vue => {
    Vue.component(LockCombinationIcon.name, LockCombinationIcon)
  }
}
LockCombinationIcon.install = plugin.install

export default LockCombinationIcon
