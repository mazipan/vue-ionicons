import AndroidColorPaletteIcon from './android-color-palette.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidColorPaletteIcon.name, AndroidColorPaletteIcon)
  }
}
AndroidColorPaletteIcon.install = plugin.install

export default AndroidColorPaletteIcon
