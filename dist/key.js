import KeyIcon from './key.vue'

const plugin = {
  install: Vue => {
    Vue.component(KeyIcon.name, KeyIcon)
  }
}
KeyIcon.install = plugin.install

export default KeyIcon
