import PlusCircledIcon from './plus-circled.vue'

const plugin = {
  install: Vue => {
    Vue.component(PlusCircledIcon.name, PlusCircledIcon)
  }
}
PlusCircledIcon.install = plugin.install

export default PlusCircledIcon
