import LoadCIcon from './load-c.vue'

const plugin = {
  install: Vue => {
    Vue.component(LoadCIcon.name, LoadCIcon)
  }
}
LoadCIcon.install = plugin.install

export default LoadCIcon
