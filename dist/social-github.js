import SocialGithubIcon from './social-github.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialGithubIcon.name, SocialGithubIcon)
  }
}
SocialGithubIcon.install = plugin.install

export default SocialGithubIcon
