import ManIcon from './man.vue'

const plugin = {
  install: Vue => {
    Vue.component(ManIcon.name, ManIcon)
  }
}
ManIcon.install = plugin.install

export default ManIcon
