import AndroidGlobeIcon from './android-globe.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidGlobeIcon.name, AndroidGlobeIcon)
  }
}
AndroidGlobeIcon.install = plugin.install

export default AndroidGlobeIcon
