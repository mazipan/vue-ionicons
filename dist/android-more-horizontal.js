import AndroidMoreHorizontalIcon from './android-more-horizontal.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidMoreHorizontalIcon.name, AndroidMoreHorizontalIcon)
  }
}
AndroidMoreHorizontalIcon.install = plugin.install

export default AndroidMoreHorizontalIcon
