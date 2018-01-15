import IosCircleFilledIcon from './ios-circle-filled.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosCircleFilledIcon.name, IosCircleFilledIcon)
  }
}
IosCircleFilledIcon.install = plugin.install

export default IosCircleFilledIcon
