import LevelsIcon from './levels.vue'

const plugin = {
  install: Vue => {
    Vue.component(LevelsIcon.name, LevelsIcon)
  }
}
LevelsIcon.install = plugin.install

export default LevelsIcon
