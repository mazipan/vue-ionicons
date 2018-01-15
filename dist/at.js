import AtIcon from './at.vue'

const plugin = {
  install: Vue => {
    Vue.component(AtIcon.name, AtIcon)
  }
}
AtIcon.install = plugin.install

export default AtIcon
