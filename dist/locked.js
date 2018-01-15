import LockedIcon from './locked.vue'

const plugin = {
  install: Vue => {
    Vue.component(LockedIcon.name, LockedIcon)
  }
}
LockedIcon.install = plugin.install

export default LockedIcon
