import WandIcon from './wand.vue'

const plugin = {
  install: Vue => {
    Vue.component(WandIcon.name, WandIcon)
  }
}
WandIcon.install = plugin.install

export default WandIcon
