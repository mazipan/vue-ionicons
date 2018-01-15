import IonicIcon from './ionic.vue'

const plugin = {
  install: Vue => {
    Vue.component(IonicIcon.name, IonicIcon)
  }
}
IonicIcon.install = plugin.install

export default IonicIcon
