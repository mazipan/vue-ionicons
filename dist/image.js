import ImageIcon from './image.vue'

const plugin = {
  install: Vue => {
    Vue.component(ImageIcon.name, ImageIcon)
  }
}
ImageIcon.install = plugin.install

export default ImageIcon
