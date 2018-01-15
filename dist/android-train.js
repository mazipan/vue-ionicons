import AndroidTrainIcon from './android-train.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidTrainIcon.name, AndroidTrainIcon)
  }
}
AndroidTrainIcon.install = plugin.install

export default AndroidTrainIcon
