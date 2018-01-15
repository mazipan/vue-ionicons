import SadIcon from './sad.vue'

const plugin = {
  install: Vue => {
    Vue.component(SadIcon.name, SadIcon)
  }
}
SadIcon.install = plugin.install

export default SadIcon
