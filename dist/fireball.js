import FireballIcon from './fireball.vue'

const plugin = {
  install: Vue => {
    Vue.component(FireballIcon.name, FireballIcon)
  }
}
FireballIcon.install = plugin.install

export default FireballIcon
