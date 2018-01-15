import PersonIcon from './person.vue'

const plugin = {
  install: Vue => {
    Vue.component(PersonIcon.name, PersonIcon)
  }
}
PersonIcon.install = plugin.install

export default PersonIcon
