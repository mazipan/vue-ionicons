import TrashAIcon from './trash-a.vue'

const plugin = {
  install: Vue => {
    Vue.component(TrashAIcon.name, TrashAIcon)
  }
}
TrashAIcon.install = plugin.install

export default TrashAIcon
