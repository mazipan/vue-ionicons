import ModelSIcon from './model-s.vue'

const plugin = {
  install: Vue => {
    Vue.component(ModelSIcon.name, ModelSIcon)
  }
}
ModelSIcon.install = plugin.install

export default ModelSIcon
