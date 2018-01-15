import HappyIcon from './happy.vue'

const plugin = {
  install: Vue => {
    Vue.component(HappyIcon.name, HappyIcon)
  }
}
HappyIcon.install = plugin.install

export default HappyIcon
