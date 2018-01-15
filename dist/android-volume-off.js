import AndroidVolumeOffIcon from './android-volume-off.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidVolumeOffIcon.name, AndroidVolumeOffIcon)
  }
}
AndroidVolumeOffIcon.install = plugin.install

export default AndroidVolumeOffIcon
