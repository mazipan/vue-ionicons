import CloudIcon from './cloud.vue'

const plugin = {
  install: Vue => {
    Vue.component(CloudIcon.name, CloudIcon)
  }
}
CloudIcon.install = plugin.install

export default CloudIcon
