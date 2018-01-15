import IosMedkitOutlineIcon from './ios-medkit-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMedkitOutlineIcon.name, IosMedkitOutlineIcon)
  }
}
IosMedkitOutlineIcon.install = plugin.install

export default IosMedkitOutlineIcon
