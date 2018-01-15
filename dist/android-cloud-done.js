import AndroidCloudDoneIcon from './android-cloud-done.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCloudDoneIcon.name, AndroidCloudDoneIcon)
  }
}
AndroidCloudDoneIcon.install = plugin.install

export default AndroidCloudDoneIcon
