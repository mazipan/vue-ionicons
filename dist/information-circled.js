import InformationCircledIcon from './information-circled.vue'

const plugin = {
  install: Vue => {
    Vue.component(InformationCircledIcon.name, InformationCircledIcon)
  }
}
InformationCircledIcon.install = plugin.install

export default InformationCircledIcon
