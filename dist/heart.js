import HeartIcon from './heart.vue'

const plugin = {
  install: Vue => {
    Vue.component(HeartIcon.name, HeartIcon)
  }
}
HeartIcon.install = plugin.install

export default HeartIcon
