import HelpBuoyIcon from './help-buoy.vue'

const plugin = {
  install: Vue => {
    Vue.component(HelpBuoyIcon.name, HelpBuoyIcon)
  }
}
HelpBuoyIcon.install = plugin.install

export default HelpBuoyIcon
