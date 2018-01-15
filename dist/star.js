import StarIcon from './star.vue'

const plugin = {
  install: Vue => {
    Vue.component(StarIcon.name, StarIcon)
  }
}
StarIcon.install = plugin.install

export default StarIcon
