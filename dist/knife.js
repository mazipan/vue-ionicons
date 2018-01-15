import KnifeIcon from './knife.vue'

const plugin = {
  install: Vue => {
    Vue.component(KnifeIcon.name, KnifeIcon)
  }
}
KnifeIcon.install = plugin.install

export default KnifeIcon
