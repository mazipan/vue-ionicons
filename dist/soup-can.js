import SoupCanIcon from './soup-can.vue'

const plugin = {
  install: Vue => {
    Vue.component(SoupCanIcon.name, SoupCanIcon)
  }
}
SoupCanIcon.install = plugin.install

export default SoupCanIcon
