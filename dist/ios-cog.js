import IosCogIcon from './ios-cog.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCogIcon.name, IosCogIcon)
  }
}
IosCogIcon.install = plugin.install

export default IosCogIcon
