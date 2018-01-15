import IosPieIcon from './ios-pie.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPieIcon.name, IosPieIcon)
  }
}
IosPieIcon.install = plugin.install

export default IosPieIcon
