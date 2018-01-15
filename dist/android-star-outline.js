import AndroidStarOutlineIcon from './android-star-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidStarOutlineIcon.name, AndroidStarOutlineIcon)
  }
}
AndroidStarOutlineIcon.install = plugin.install

export default AndroidStarOutlineIcon
