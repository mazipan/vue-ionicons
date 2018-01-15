import LoadDIcon from './load-d.vue'

const plugin = {
  install: Vue => {
    Vue.component(LoadDIcon.name, LoadDIcon)
  }
}
LoadDIcon.install = plugin.install

export default LoadDIcon
