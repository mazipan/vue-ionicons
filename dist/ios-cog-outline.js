import IosCogOutlineIcon from './ios-cog-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCogOutlineIcon.name, IosCogOutlineIcon)
  }
}
IosCogOutlineIcon.install = plugin.install

export default IosCogOutlineIcon
