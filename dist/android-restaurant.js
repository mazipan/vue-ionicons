import AndroidRestaurantIcon from './android-restaurant.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidRestaurantIcon.name, AndroidRestaurantIcon)
  }
}
AndroidRestaurantIcon.install = plugin.install

export default AndroidRestaurantIcon
