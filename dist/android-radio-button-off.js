import AndroidRadioButtonOffIcon from './android-radio-button-off.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidRadioButtonOffIcon.name, AndroidRadioButtonOffIcon)
  }
}
AndroidRadioButtonOffIcon.install = plugin.install

export default AndroidRadioButtonOffIcon
