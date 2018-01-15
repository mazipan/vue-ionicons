import IosSunnyOutlineIcon from './ios-sunny-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSunnyOutlineIcon.name, IosSunnyOutlineIcon)
  }
}
IosSunnyOutlineIcon.install = plugin.install

export default IosSunnyOutlineIcon
