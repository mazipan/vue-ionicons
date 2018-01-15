import PaperAirplaneIcon from './paper-airplane.vue'

const plugin = {
  install: Vue => {
    Vue.component(PaperAirplaneIcon.name, PaperAirplaneIcon)
  }
}
PaperAirplaneIcon.install = plugin.install

export default PaperAirplaneIcon
