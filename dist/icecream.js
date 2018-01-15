import IcecreamIcon from './icecream.vue'

const plugin = {
  install: Vue => {
    Vue.component(IcecreamIcon.name, IcecreamIcon)
  }
}
IcecreamIcon.install = plugin.install

export default IcecreamIcon
