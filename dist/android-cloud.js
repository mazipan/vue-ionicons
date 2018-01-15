import AndroidCloudIcon from './android-cloud.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCloudIcon.name, AndroidCloudIcon)
  }
}
AndroidCloudIcon.install = plugin.install

export default AndroidCloudIcon
