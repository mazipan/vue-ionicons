import IosFlaskIcon from './ios-flask.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFlaskIcon.name, IosFlaskIcon)
  }
}
IosFlaskIcon.install = plugin.install

export default IosFlaskIcon
