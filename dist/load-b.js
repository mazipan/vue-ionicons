import LoadBIcon from './load-b.vue'

const plugin = {
  install: Vue => {
    Vue.component(LoadBIcon.name, LoadBIcon)
  }
}
LoadBIcon.install = plugin.install

export default LoadBIcon
