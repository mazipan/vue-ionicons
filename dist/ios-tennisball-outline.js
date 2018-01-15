import IosTennisballOutlineIcon from './ios-tennisball-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosTennisballOutlineIcon.name, IosTennisballOutlineIcon)
  }
}
IosTennisballOutlineIcon.install = plugin.install

export default IosTennisballOutlineIcon
