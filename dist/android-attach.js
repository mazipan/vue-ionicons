import AndroidAttachIcon from './android-attach.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidAttachIcon.name, AndroidAttachIcon)
  }
}
AndroidAttachIcon.install = plugin.install

export default AndroidAttachIcon
