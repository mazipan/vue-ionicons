import AndroidListIcon from './android-list.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidListIcon.name, AndroidListIcon)
  }
}
AndroidListIcon.install = plugin.install

export default AndroidListIcon
