import IosPartlysunnyOutlineIcon from './ios-partlysunny-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosPartlysunnyOutlineIcon.name, IosPartlysunnyOutlineIcon)
  }
}
IosPartlysunnyOutlineIcon.install = plugin.install

export default IosPartlysunnyOutlineIcon
