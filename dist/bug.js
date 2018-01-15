import BugIcon from './bug.vue'

const plugin = {
  install: Vue => {
    Vue.component(BugIcon.name, BugIcon)
  }
}
BugIcon.install = plugin.install

export default BugIcon
