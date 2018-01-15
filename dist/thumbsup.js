import ThumbsupIcon from './thumbsup.vue'

const plugin = {
  install: Vue => {
    Vue.component(ThumbsupIcon.name, ThumbsupIcon)
  }
}
ThumbsupIcon.install = plugin.install

export default ThumbsupIcon
