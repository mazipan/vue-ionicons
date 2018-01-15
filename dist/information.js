import InformationIcon from './information.vue'

const plugin = {
  install: Vue => {
    Vue.component(InformationIcon.name, InformationIcon)
  }
}
InformationIcon.install = plugin.install

export default InformationIcon
