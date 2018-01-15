import CubeIcon from './cube.vue'

const plugin = {
  install: Vue => {
    Vue.component(CubeIcon.name, CubeIcon)
  }
}
CubeIcon.install = plugin.install

export default CubeIcon
