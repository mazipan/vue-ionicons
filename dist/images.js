import ImagesIcon from './images.vue'

const plugin = {
  install: Vue => {
    Vue.component(ImagesIcon.name, ImagesIcon)
  }
}
ImagesIcon.install = plugin.install

export default ImagesIcon
