import IosBoxIcon from './ios-box.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBoxIcon.name, IosBoxIcon)
  }
}
IosBoxIcon.install = plugin.install

export default IosBoxIcon
