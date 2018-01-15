import NuclearIcon from './nuclear.vue'

const plugin = {
  install: Vue => {
    Vue.component(NuclearIcon.name, NuclearIcon)
  }
}
NuclearIcon.install = plugin.install

export default NuclearIcon
