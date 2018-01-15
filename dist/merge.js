import MergeIcon from './merge.vue'

const plugin = {
  install: Vue => {
    Vue.component(MergeIcon.name, MergeIcon)
  }
}
MergeIcon.install = plugin.install

export default MergeIcon
