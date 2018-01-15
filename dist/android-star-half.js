import AndroidStarHalfIcon from './android-star-half.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidStarHalfIcon.name, AndroidStarHalfIcon)
  }
}
AndroidStarHalfIcon.install = plugin.install

export default AndroidStarHalfIcon
