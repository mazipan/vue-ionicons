import IosPeopleOutlineIcon from './ios-people-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPeopleOutlineIcon.name, IosPeopleOutlineIcon)
  }
}
IosPeopleOutlineIcon.install = plugin.install

export default IosPeopleOutlineIcon
