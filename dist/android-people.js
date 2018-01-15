import AndroidPeopleIcon from './android-people.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidPeopleIcon.name, AndroidPeopleIcon)
  }
}
AndroidPeopleIcon.install = plugin.install

export default AndroidPeopleIcon
