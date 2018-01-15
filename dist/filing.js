import FilingIcon from './filing.vue'

const plugin = {
  install: Vue => {
    Vue.component(FilingIcon.name, FilingIcon)
  }
}
FilingIcon.install = plugin.install

export default FilingIcon
