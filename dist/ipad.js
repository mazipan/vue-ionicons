import IpadIcon from './ipad.vue'

const plugin = {
  install: Vue => {
    Vue.component(IpadIcon.name, IpadIcon)
  }
}
IpadIcon.install = plugin.install

export default IpadIcon
