import AndroidContactsIcon from './android-contacts.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidContactsIcon.name, AndroidContactsIcon)
  }
}
AndroidContactsIcon.install = plugin.install

export default AndroidContactsIcon
