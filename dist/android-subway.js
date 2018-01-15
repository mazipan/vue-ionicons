import AndroidSubwayIcon from './android-subway.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidSubwayIcon.name, AndroidSubwayIcon)
  }
}
AndroidSubwayIcon.install = plugin.install

export default AndroidSubwayIcon
