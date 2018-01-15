import ThumbsdownIcon from './thumbsdown.vue'

const plugin = {
  install: Vue => {
    Vue.component(ThumbsdownIcon.name, ThumbsdownIcon)
  }
}
ThumbsdownIcon.install = plugin.install

export default ThumbsdownIcon
