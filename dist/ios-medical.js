import IosMedicalIcon from './ios-medical.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMedicalIcon.name, IosMedicalIcon)
  }
}
IosMedicalIcon.install = plugin.install

export default IosMedicalIcon
