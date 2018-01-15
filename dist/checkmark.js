import CheckmarkIcon from './checkmark.vue'

const plugin = {
  install: Vue => {
    Vue.component(CheckmarkIcon.name, CheckmarkIcon)
  }
}
CheckmarkIcon.install = plugin.install

export default CheckmarkIcon
