import MicBIcon from './mic-b.vue'

const plugin = {
  install: Vue => {
    Vue.component(MicBIcon.name, MicBIcon)
  }
}
MicBIcon.install = plugin.install

export default MicBIcon
