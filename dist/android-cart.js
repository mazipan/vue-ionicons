import AndroidCartIcon from './android-cart.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidCartIcon.name, AndroidCartIcon)
  }
}
AndroidCartIcon.install = plugin.install

export default AndroidCartIcon
