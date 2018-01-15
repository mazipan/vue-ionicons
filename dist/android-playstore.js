import AndroidPlaystoreIcon from './android-playstore.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidPlaystoreIcon.name, AndroidPlaystoreIcon)
  }
}
AndroidPlaystoreIcon.install = plugin.install

export default AndroidPlaystoreIcon
