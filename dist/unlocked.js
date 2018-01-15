import UnlockedIcon from './unlocked.vue'

const plugin = {
  install: Vue => {
    Vue.component(UnlockedIcon.name, UnlockedIcon)
  }
}
UnlockedIcon.install = plugin.install

export default UnlockedIcon
