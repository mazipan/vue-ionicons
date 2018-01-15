import IosPintIcon from './ios-pint.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPintIcon.name, IosPintIcon)
  }
}
IosPintIcon.install = plugin.install

export default IosPintIcon
