import AndroidVolumeUpIcon from './android-volume-up.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidVolumeUpIcon.name, AndroidVolumeUpIcon)
  }
}
AndroidVolumeUpIcon.install = plugin.install

export default AndroidVolumeUpIcon
