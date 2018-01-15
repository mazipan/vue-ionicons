import PersonStalkerIcon from './person-stalker.vue'

const plugin = {
  install: Vue => {
    Vue.component(PersonStalkerIcon.name, PersonStalkerIcon)
  }
}
PersonStalkerIcon.install = plugin.install

export default PersonStalkerIcon
