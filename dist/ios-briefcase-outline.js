import IosBriefcaseOutlineIcon from './ios-briefcase-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosBriefcaseOutlineIcon.name, IosBriefcaseOutlineIcon)
  }
}
IosBriefcaseOutlineIcon.install = plugin.install

export default IosBriefcaseOutlineIcon
