import AndroidSyncIcon from './android-sync.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidSyncIcon.name, AndroidSyncIcon)
  }
}
AndroidSyncIcon.install = plugin.install

export default AndroidSyncIcon
