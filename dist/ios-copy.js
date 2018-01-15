import IosCopyIcon from './ios-copy.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCopyIcon.name, IosCopyIcon)
  }
}
IosCopyIcon.install = plugin.install

export default IosCopyIcon
