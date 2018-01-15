import IosSunnyIcon from './ios-sunny.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosSunnyIcon.name, IosSunnyIcon)
  }
}
IosSunnyIcon.install = plugin.install

export default IosSunnyIcon
