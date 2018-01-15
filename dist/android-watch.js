import AndroidWatchIcon from './android-watch.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidWatchIcon.name, AndroidWatchIcon)
  }
}
AndroidWatchIcon.install = plugin.install

export default AndroidWatchIcon
