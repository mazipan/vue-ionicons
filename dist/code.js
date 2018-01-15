import CodeIcon from './code.vue'

const plugin = {
  install: Vue => {
    Vue.component(CodeIcon.name, CodeIcon)
  }
}
CodeIcon.install = plugin.install

export default CodeIcon
