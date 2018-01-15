import MoreIcon from './more.vue'

const plugin = {
  install: Vue => {
    Vue.component(MoreIcon.name, MoreIcon)
  }
}
MoreIcon.install = plugin.install

export default MoreIcon
