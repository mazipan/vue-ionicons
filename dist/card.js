import CardIcon from './card.vue'

const plugin = {
  install: Vue => {
    Vue.component(CardIcon.name, CardIcon)
  }
}
CardIcon.install = plugin.install

export default CardIcon
