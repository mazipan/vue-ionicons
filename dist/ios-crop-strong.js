import IosCropStrongIcon from './ios-crop-strong.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCropStrongIcon.name, IosCropStrongIcon)
  }
}
IosCropStrongIcon.install = plugin.install

export default IosCropStrongIcon
