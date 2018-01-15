import MicCIcon from './mic-c.vue'

const plugin = {
  install: Vue => {
    Vue.component(MicCIcon.name, MicCIcon)
  }
}
MicCIcon.install = plugin.install

export default MicCIcon
