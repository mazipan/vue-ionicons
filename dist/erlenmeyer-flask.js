import ErlenmeyerFlaskIcon from './erlenmeyer-flask.vue'

const plugin = {
  install: Vue => {
    Vue.component(ErlenmeyerFlaskIcon.name, ErlenmeyerFlaskIcon)
  }
}
ErlenmeyerFlaskIcon.install = plugin.install

export default ErlenmeyerFlaskIcon
