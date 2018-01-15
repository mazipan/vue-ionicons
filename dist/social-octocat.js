import SocialOctocatIcon from './social-octocat.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialOctocatIcon.name, SocialOctocatIcon)
  }
}
SocialOctocatIcon.install = plugin.install

export default SocialOctocatIcon
