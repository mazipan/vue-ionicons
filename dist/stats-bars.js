import StatsBarsIcon from './stats-bars.vue'

const plugin = {
  install: Vue => {
    Vue.component(StatsBarsIcon.name, StatsBarsIcon)
  }
}
StatsBarsIcon.install = plugin.install

export default StatsBarsIcon
