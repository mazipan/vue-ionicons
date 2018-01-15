import HomeIcon from './home.vue'

const plugin = {
  install: Vue => {
    Vue.component(HomeIcon.name, HomeIcon)
  }
}
HomeIcon.install = plugin.install

export default HomeIcon
