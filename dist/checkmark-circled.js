import CheckmarkCircledIcon from './checkmark-circled.vue'

const plugin = {
  install: Vue => {
    Vue.component(CheckmarkCircledIcon.name, CheckmarkCircledIcon)
  }
}
CheckmarkCircledIcon.install = plugin.install

export default CheckmarkCircledIcon
