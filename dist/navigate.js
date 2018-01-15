import NavigateIcon from './navigate.vue'

const plugin = {
  install: Vue => {
    Vue.component(NavigateIcon.name, NavigateIcon)
  }
}
NavigateIcon.install = plugin.install

export default NavigateIcon
