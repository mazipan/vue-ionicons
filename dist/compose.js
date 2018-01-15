import ComposeIcon from './compose.vue'

const plugin = {
  install: Vue => {
    Vue.component(ComposeIcon.name, ComposeIcon)
  }
}
ComposeIcon.install = plugin.install

export default ComposeIcon
