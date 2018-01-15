import AndroidMenuIcon from './android-menu.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidMenuIcon.name, AndroidMenuIcon)
  }
}
AndroidMenuIcon.install = plugin.install

export default AndroidMenuIcon
