import IosAlarmOutlineIcon from './ios-alarm-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosAlarmOutlineIcon.name, IosAlarmOutlineIcon)
  }
}
IosAlarmOutlineIcon.install = plugin.install

export default IosAlarmOutlineIcon
