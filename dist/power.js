import PowerIcon from './power.vue'

const plugin = {
  install: Vue => {
    Vue.component(PowerIcon.name, PowerIcon)
  }
}
PowerIcon.install = plugin.install

export default PowerIcon
