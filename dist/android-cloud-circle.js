import AndroidCloudCircleIcon from './android-cloud-circle.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCloudCircleIcon.name, AndroidCloudCircleIcon)
  }
}
AndroidCloudCircleIcon.install = plugin.install

export default AndroidCloudCircleIcon
