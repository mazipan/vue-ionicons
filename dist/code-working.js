import CodeWorkingIcon from './code-working.vue'

const plugin = {
  install: Vue => {
    Vue.component(CodeWorkingIcon.name, CodeWorkingIcon)
  }
}
CodeWorkingIcon.install = plugin.install

export default CodeWorkingIcon
