import VideocameraIcon from './videocamera.vue'

const plugin = {
  install: Vue => {
    Vue.component(VideocameraIcon.name, VideocameraIcon)
  }
}
VideocameraIcon.install = plugin.install

export default VideocameraIcon
