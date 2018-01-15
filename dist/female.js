import FemaleIcon from './female.vue'

const plugin = {
  install: Vue => {
    Vue.component(FemaleIcon.name, FemaleIcon)
  }
}
FemaleIcon.install = plugin.install

export default FemaleIcon
