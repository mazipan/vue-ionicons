import EyeIcon from './eye.vue'

const plugin = {
  install: Vue => {
    Vue.component(EyeIcon.name, EyeIcon)
  }
}
EyeIcon.install = plugin.install

export default EyeIcon
