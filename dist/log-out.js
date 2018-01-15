import LogOutIcon from './log-out.vue'

const plugin = {
  install: Vue => {
    Vue.component(LogOutIcon.name, LogOutIcon)
  }
}
LogOutIcon.install = plugin.install

export default LogOutIcon
