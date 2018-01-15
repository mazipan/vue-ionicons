import JetIcon from './jet.vue'

const plugin = {
  install: Vue => {
    Vue.component(JetIcon.name, JetIcon)
  }
}
JetIcon.install = plugin.install

export default JetIcon
