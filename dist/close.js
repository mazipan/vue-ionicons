import CloseIcon from './close.vue'

const plugin = {
  install: Vue => {
    Vue.component(CloseIcon.name, CloseIcon)
  }
}
CloseIcon.install = plugin.install

export default CloseIcon
