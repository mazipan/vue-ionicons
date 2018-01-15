import SadOutlineIcon from './sad-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SadOutlineIcon.name, SadOutlineIcon)
  }
}
SadOutlineIcon.install = plugin.install

export default SadOutlineIcon
