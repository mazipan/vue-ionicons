import IosPawIcon from './ios-paw.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPawIcon.name, IosPawIcon)
  }
}
IosPawIcon.install = plugin.install

export default IosPawIcon
