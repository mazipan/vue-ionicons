import AndroidPhonePortraitIcon from './android-phone-portrait.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidPhonePortraitIcon.name, AndroidPhonePortraitIcon)
  }
}
AndroidPhonePortraitIcon.install = plugin.install

export default AndroidPhonePortraitIcon
