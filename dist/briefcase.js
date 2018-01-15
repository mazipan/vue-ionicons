import BriefcaseIcon from './briefcase.vue'

const plugin = {
  install: Vue => {
    Vue.component(BriefcaseIcon.name, BriefcaseIcon)
  }
}
BriefcaseIcon.install = plugin.install

export default BriefcaseIcon
