import ApertureIcon from './aperture.vue'

const plugin = {
  install: Vue => {
    Vue.component(ApertureIcon.name, ApertureIcon)
  }
}
ApertureIcon.install = plugin.install

export default ApertureIcon
