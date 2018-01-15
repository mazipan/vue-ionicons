import DiscIcon from './disc.vue'

const plugin = {
  install: Vue => {
    Vue.component(DiscIcon.name, DiscIcon)
  }
}
DiscIcon.install = plugin.install

export default DiscIcon
