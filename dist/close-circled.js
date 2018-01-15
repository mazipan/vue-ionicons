import CloseCircledIcon from './close-circled.vue'

const plugin = {
  install: Vue => {
    Vue.component(CloseCircledIcon.name, CloseCircledIcon)
  }
}
CloseCircledIcon.install = plugin.install

export default CloseCircledIcon
