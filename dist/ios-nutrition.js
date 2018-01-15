import IosNutritionIcon from './ios-nutrition.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosNutritionIcon.name, IosNutritionIcon)
  }
}
IosNutritionIcon.install = plugin.install

export default IosNutritionIcon
