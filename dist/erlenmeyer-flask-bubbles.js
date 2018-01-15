import ErlenmeyerFlaskBubblesIcon from './erlenmeyer-flask-bubbles.vue'

const plugin = {
  install: Vue => {
    Vue.component(ErlenmeyerFlaskBubblesIcon.name, ErlenmeyerFlaskBubblesIcon)
  }
}
ErlenmeyerFlaskBubblesIcon.install = plugin.install

export default ErlenmeyerFlaskBubblesIcon
