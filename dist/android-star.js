import AndroidStarIcon from './android-star.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidStarIcon.name, AndroidStarIcon)
  }
}
AndroidStarIcon.install = plugin.install

export default AndroidStarIcon
