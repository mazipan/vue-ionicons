import PlayIcon from './play.vue'

const plugin = {
  install: Vue => {
    Vue.component(PlayIcon.name, PlayIcon)
  }
}
PlayIcon.install = plugin.install

export default PlayIcon
