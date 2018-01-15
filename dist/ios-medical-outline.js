import IosMedicalOutlineIcon from './ios-medical-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMedicalOutlineIcon.name, IosMedicalOutlineIcon)
  }
}
IosMedicalOutlineIcon.install = plugin.install

export default IosMedicalOutlineIcon
