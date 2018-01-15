import IosAlarmIcon from './ios-alarm.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosAlarmIcon.name, IosAlarmIcon)
  }
}
IosAlarmIcon.install = plugin.install

export default IosAlarmIcon
