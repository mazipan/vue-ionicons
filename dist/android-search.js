import AndroidSearchIcon from './android-search.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidSearchIcon.name, AndroidSearchIcon)
  }
}
AndroidSearchIcon.install = plugin.install

export default AndroidSearchIcon
