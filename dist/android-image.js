import AndroidImageIcon from './android-image.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidImageIcon.name, AndroidImageIcon)
  }
}
AndroidImageIcon.install = plugin.install

export default AndroidImageIcon
