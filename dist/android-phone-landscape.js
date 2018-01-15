import AndroidPhoneLandscapeIcon from './android-phone-landscape.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidPhoneLandscapeIcon.name, AndroidPhoneLandscapeIcon)
  }
}
AndroidPhoneLandscapeIcon.install = plugin.install

export default AndroidPhoneLandscapeIcon
