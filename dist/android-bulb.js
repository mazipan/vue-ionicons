import AndroidBulbIcon from './android-bulb.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidBulbIcon.name, AndroidBulbIcon)
  }
}
AndroidBulbIcon.install = plugin.install

export default AndroidBulbIcon
