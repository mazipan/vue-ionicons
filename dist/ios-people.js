import IosPeopleIcon from './ios-people.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPeopleIcon.name, IosPeopleIcon)
  }
}
IosPeopleIcon.install = plugin.install

export default IosPeopleIcon
