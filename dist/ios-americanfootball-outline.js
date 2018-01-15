import IosAmericanfootballOutlineIcon from './ios-americanfootball-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosAmericanfootballOutlineIcon.name, IosAmericanfootballOutlineIcon)
  }
}
IosAmericanfootballOutlineIcon.install = plugin.install

export default IosAmericanfootballOutlineIcon
