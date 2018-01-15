import AndroidHappyIcon from './android-happy.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidHappyIcon.name, AndroidHappyIcon)
  }
}
AndroidHappyIcon.install = plugin.install

export default AndroidHappyIcon
