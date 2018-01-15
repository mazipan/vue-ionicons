import ClosedCaptioningIcon from './closed-captioning.vue'

const plugin = {
  install: Vue => {
    Vue.component(ClosedCaptioningIcon.name, ClosedCaptioningIcon)
  }
}
ClosedCaptioningIcon.install = plugin.install

export default ClosedCaptioningIcon
