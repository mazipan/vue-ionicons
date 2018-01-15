import ClockIcon from './clock.vue'

const plugin = {
  install: Vue => {
    Vue.component(ClockIcon.name, ClockIcon)
  }
}
ClockIcon.install = plugin.install

export default ClockIcon
