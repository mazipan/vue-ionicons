import IosAmericanfootballIcon from './ios-americanfootball.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosAmericanfootballIcon.name, IosAmericanfootballIcon)
  }
}
IosAmericanfootballIcon.install = plugin.install

export default IosAmericanfootballIcon
