import RadioWavesIcon from './radio-waves.vue'

const plugin = {
  install: Vue => {
    Vue.component(RadioWavesIcon.name, RadioWavesIcon)
  }
}
RadioWavesIcon.install = plugin.install

export default RadioWavesIcon
