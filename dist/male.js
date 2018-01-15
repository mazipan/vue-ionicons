import MaleIcon from './male.vue'

const plugin = {
  install: Vue => {
    Vue.component(MaleIcon.name, MaleIcon)
  }
}
MaleIcon.install = plugin.install

export default MaleIcon
