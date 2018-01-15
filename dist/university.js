import UniversityIcon from './university.vue'

const plugin = {
  install: Vue => {
    Vue.component(UniversityIcon.name, UniversityIcon)
  }
}
UniversityIcon.install = plugin.install

export default UniversityIcon
