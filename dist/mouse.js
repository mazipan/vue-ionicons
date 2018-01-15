import MouseIcon from './mouse.vue'

const plugin = {
  install: Vue => {
    Vue.component(MouseIcon.name, MouseIcon)
  }
}
MouseIcon.install = plugin.install

export default MouseIcon
