import IosChatboxesOutlineIcon from './ios-chatboxes-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosChatboxesOutlineIcon.name, IosChatboxesOutlineIcon)
  }
}
IosChatboxesOutlineIcon.install = plugin.install

export default IosChatboxesOutlineIcon
