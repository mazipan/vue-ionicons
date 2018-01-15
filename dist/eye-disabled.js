import EyeDisabledIcon from './eye-disabled.vue'

const plugin = {
  install: Vue => {
    Vue.component(EyeDisabledIcon.name, EyeDisabledIcon)
  }
}
EyeDisabledIcon.install = plugin.install

export default EyeDisabledIcon
