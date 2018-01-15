import HappyOutlineIcon from './happy-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(HappyOutlineIcon.name, HappyOutlineIcon)
  }
}
HappyOutlineIcon.install = plugin.install

export default HappyOutlineIcon
