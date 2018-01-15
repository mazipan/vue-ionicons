import TshirtOutlineIcon from './tshirt-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(TshirtOutlineIcon.name, TshirtOutlineIcon)
  }
}
TshirtOutlineIcon.install = plugin.install

export default TshirtOutlineIcon
