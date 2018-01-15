import AndroidPersonAddIcon from './android-person-add.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidPersonAddIcon.name, AndroidPersonAddIcon)
  }
}
AndroidPersonAddIcon.install = plugin.install

export default AndroidPersonAddIcon
