import AndroidRadioButtonOnIcon from './android-radio-button-on.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidRadioButtonOnIcon.name, AndroidRadioButtonOnIcon)
  }
}
AndroidRadioButtonOnIcon.install = plugin.install

export default AndroidRadioButtonOnIcon
