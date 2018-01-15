import CompassIcon from './compass.vue'

const plugin = {
  install: Vue => {
    Vue.component(CompassIcon.name, CompassIcon)
  }
}
CompassIcon.install = plugin.install

export default CompassIcon
