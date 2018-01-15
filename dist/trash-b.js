import TrashBIcon from './trash-b.vue'

const plugin = {
  install: Vue => {
    Vue.component(TrashBIcon.name, TrashBIcon)
  }
}
TrashBIcon.install = plugin.install

export default TrashBIcon
