import ToggleFilledIcon from './toggle-filled.vue'

const plugin = {
  install: Vue => {
    Vue.component(ToggleFilledIcon.name, ToggleFilledIcon)
  }
}
ToggleFilledIcon.install = plugin.install

export default ToggleFilledIcon
