import BowtieIcon from './bowtie.vue'

const plugin = {
  install: Vue => {
    Vue.component(BowtieIcon.name, BowtieIcon)
  }
}
BowtieIcon.install = plugin.install

export default BowtieIcon
