import IosNutritionOutlineIcon from './ios-nutrition-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosNutritionOutlineIcon.name, IosNutritionOutlineIcon)
  }
}
IosNutritionOutlineIcon.install = plugin.install

export default IosNutritionOutlineIcon
