import IosFlaskOutlineIcon from './ios-flask-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosFlaskOutlineIcon.name, IosFlaskOutlineIcon)
  }
}
IosFlaskOutlineIcon.install = plugin.install

export default IosFlaskOutlineIcon
