import MedkitIcon from './medkit.vue'

const plugin = {
  install: Vue => {
    Vue.component(MedkitIcon.name, MedkitIcon)
  }
}
MedkitIcon.install = plugin.install

export default MedkitIcon
