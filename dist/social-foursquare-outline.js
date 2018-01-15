import SocialFoursquareOutlineIcon from './social-foursquare-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialFoursquareOutlineIcon.name, SocialFoursquareOutlineIcon)
  }
}
SocialFoursquareOutlineIcon.install = plugin.install

export default SocialFoursquareOutlineIcon
