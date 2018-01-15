import LightbulbIcon from './lightbulb.vue'

const plugin = {
  install: Vue => {
    Vue.component(LightbulbIcon.name, LightbulbIcon)
  }
}
LightbulbIcon.install = plugin.install

export default LightbulbIcon
