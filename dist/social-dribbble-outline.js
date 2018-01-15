import SocialDribbbleOutlineIcon from './social-dribbble-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialDribbbleOutlineIcon.name, SocialDribbbleOutlineIcon)
  }
}
SocialDribbbleOutlineIcon.install = plugin.install

export default SocialDribbbleOutlineIcon
