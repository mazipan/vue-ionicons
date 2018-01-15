import AndroidVolumeDownIcon from './android-volume-down.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidVolumeDownIcon.name, AndroidVolumeDownIcon)
  }
}
AndroidVolumeDownIcon.install = plugin.install

export default AndroidVolumeDownIcon
