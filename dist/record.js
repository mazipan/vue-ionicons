import RecordIcon from './record.vue'

const plugin = {
  install: Vue => {
    Vue.component(RecordIcon.name, RecordIcon)
  }
}
RecordIcon.install = plugin.install

export default RecordIcon
