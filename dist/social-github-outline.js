import SocialGithubOutlineIcon from './social-github-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialGithubOutlineIcon.name, SocialGithubOutlineIcon)
  }
}
SocialGithubOutlineIcon.install = plugin.install

export default SocialGithubOutlineIcon
