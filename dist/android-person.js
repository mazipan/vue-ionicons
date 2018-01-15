import AndroidPersonIcon from './android-person.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidPersonIcon.name, AndroidPersonIcon)
  }
}
AndroidPersonIcon.install = plugin.install

export default AndroidPersonIcon
