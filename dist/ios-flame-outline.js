import IosFlameOutlineIcon from './ios-flame-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFlameOutlineIcon.name, IosFlameOutlineIcon)
  }
}
IosFlameOutlineIcon.install = plugin.install

export default IosFlameOutlineIcon
