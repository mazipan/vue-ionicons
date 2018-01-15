import AndroidFunnelIcon from './android-funnel.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidFunnelIcon.name, AndroidFunnelIcon)
  }
}
AndroidFunnelIcon.install = plugin.install

export default AndroidFunnelIcon
