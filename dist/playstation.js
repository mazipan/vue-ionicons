import PlaystationIcon from './playstation.vue'

const plugin = {
  install: Vue => {
    Vue.component(PlaystationIcon.name, PlaystationIcon)
  }
}
PlaystationIcon.install = plugin.install

export default PlaystationIcon
