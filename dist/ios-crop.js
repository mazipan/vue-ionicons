import IosCropIcon from './ios-crop.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCropIcon.name, IosCropIcon)
  }
}
IosCropIcon.install = plugin.install

export default IosCropIcon
