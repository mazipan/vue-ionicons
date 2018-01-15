import PoundIcon from './pound.vue'

const plugin = {
  install: Vue => {
    Vue.component(PoundIcon.name, PoundIcon)
  }
}
PoundIcon.install = plugin.install

export default PoundIcon
