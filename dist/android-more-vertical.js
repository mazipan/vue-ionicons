import AndroidMoreVerticalIcon from './android-more-vertical.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidMoreVerticalIcon.name, AndroidMoreVerticalIcon)
  }
}
AndroidMoreVerticalIcon.install = plugin.install

export default AndroidMoreVerticalIcon
