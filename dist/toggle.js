import ToggleIcon from './toggle.vue'

const plugin = {
  install: Vue => {
    Vue.component(ToggleIcon.name, ToggleIcon)
  }
}
ToggleIcon.install = plugin.install

export default ToggleIcon
