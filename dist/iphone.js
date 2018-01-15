import IphoneIcon from './iphone.vue'

const plugin = {
  install: Vue => {
    Vue.component(IphoneIcon.name, IphoneIcon)
  }
}
IphoneIcon.install = plugin.install

export default IphoneIcon
