import ForwardIcon from './forward.vue'

const plugin = {
  install: Vue => {
    Vue.component(ForwardIcon.name, ForwardIcon)
  }
}
ForwardIcon.install = plugin.install

export default ForwardIcon
