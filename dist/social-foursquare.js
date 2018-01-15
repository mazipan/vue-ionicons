import SocialFoursquareIcon from './social-foursquare.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialFoursquareIcon.name, SocialFoursquareIcon)
  }
}
SocialFoursquareIcon.install = plugin.install

export default SocialFoursquareIcon
