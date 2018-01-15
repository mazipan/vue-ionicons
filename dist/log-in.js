import LogInIcon from './log-in.vue'

const plugin = {
  install: Vue => {
    Vue.component(LogInIcon.name, LogInIcon)
  }
}
LogInIcon.install = plugin.install

export default LogInIcon
