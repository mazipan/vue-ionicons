import AndroidShareAltIcon from './android-share-alt.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidShareAltIcon.name, AndroidShareAltIcon)
  }
}
AndroidShareAltIcon.install = plugin.install

export default AndroidShareAltIcon
