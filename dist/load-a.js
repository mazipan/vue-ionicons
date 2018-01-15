import LoadAIcon from './load-a.vue'

const plugin = {
  install: Vue => {
    Vue.component(LoadAIcon.name, LoadAIcon)
  }
}
LoadAIcon.install = plugin.install

export default LoadAIcon
