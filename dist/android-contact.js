import AndroidContactIcon from './android-contact.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidContactIcon.name, AndroidContactIcon)
  }
}
AndroidContactIcon.install = plugin.install

export default AndroidContactIcon
