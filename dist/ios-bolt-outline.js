import IosBoltOutlineIcon from './ios-bolt-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBoltOutlineIcon.name, IosBoltOutlineIcon)
  }
}
IosBoltOutlineIcon.install = plugin.install

export default IosBoltOutlineIcon
