import PersonAddIcon from './person-add.vue'

const plugin = {
  install: Vue => {
    Vue.component(PersonAddIcon.name, PersonAddIcon)
  }
}
PersonAddIcon.install = plugin.install

export default PersonAddIcon
