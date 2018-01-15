import IosBriefcaseIcon from './ios-briefcase.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBriefcaseIcon.name, IosBriefcaseIcon)
  }
}
IosBriefcaseIcon.install = plugin.install

export default IosBriefcaseIcon
