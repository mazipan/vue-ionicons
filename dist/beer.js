import BeerIcon from './beer.vue'

const plugin = {
  install: Vue => {
    Vue.component(BeerIcon.name, BeerIcon)
  }
}
BeerIcon.install = plugin.install

export default BeerIcon
