import IosChatboxesIcon from './ios-chatboxes.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosChatboxesIcon.name, IosChatboxesIcon)
  }
}
IosChatboxesIcon.install = plugin.install

export default IosChatboxesIcon
