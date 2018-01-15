import AndroidCloudOutlineIcon from './android-cloud-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCloudOutlineIcon.name, AndroidCloudOutlineIcon)
  }
}
AndroidCloudOutlineIcon.install = plugin.install

export default AndroidCloudOutlineIcon
