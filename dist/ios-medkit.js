import IosMedkitIcon from './ios-medkit.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMedkitIcon.name, IosMedkitIcon)
  }
}
IosMedkitIcon.install = plugin.install

export default IosMedkitIcon
