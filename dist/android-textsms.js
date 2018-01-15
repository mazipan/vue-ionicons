import AndroidTextsmsIcon from './android-textsms.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidTextsmsIcon.name, AndroidTextsmsIcon)
  }
}
AndroidTextsmsIcon.install = plugin.install

export default AndroidTextsmsIcon
