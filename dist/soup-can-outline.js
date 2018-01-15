import SoupCanOutlineIcon from './soup-can-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SoupCanOutlineIcon.name, SoupCanOutlineIcon)
  }
}
SoupCanOutlineIcon.install = plugin.install

export default SoupCanOutlineIcon
