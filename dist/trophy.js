import TrophyIcon from './trophy.vue'

const plugin = {
  install: Vue => {
    Vue.component(TrophyIcon.name, TrophyIcon)
  }
}
TrophyIcon.install = plugin.install

export default TrophyIcon
