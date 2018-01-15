import IosTennisballIcon from './ios-tennisball.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosTennisballIcon.name, IosTennisballIcon)
  }
}
IosTennisballIcon.install = plugin.install

export default IosTennisballIcon
