import SocialDribbbleIcon from './social-dribbble.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialDribbbleIcon.name, SocialDribbbleIcon)
  }
}
SocialDribbbleIcon.install = plugin.install

export default SocialDribbbleIcon
