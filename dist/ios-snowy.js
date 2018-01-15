import IosSnowyIcon from './ios-snowy.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSnowyIcon.name, IosSnowyIcon)
  }
}
IosSnowyIcon.install = plugin.install

export default IosSnowyIcon
