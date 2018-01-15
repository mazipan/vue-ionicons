import NoSmokingIcon from './no-smoking.vue'

const plugin = {
  install: Vue => {
    Vue.component(NoSmokingIcon.name, NoSmokingIcon)
  }
}
NoSmokingIcon.install = plugin.install

export default NoSmokingIcon
