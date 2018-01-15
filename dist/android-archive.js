import AndroidArchiveIcon from './android-archive.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArchiveIcon.name, AndroidArchiveIcon)
  }
}
AndroidArchiveIcon.install = plugin.install

export default AndroidArchiveIcon
