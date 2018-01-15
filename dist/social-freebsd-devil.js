import SocialFreebsdDevilIcon from './social-freebsd-devil.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialFreebsdDevilIcon.name, SocialFreebsdDevilIcon)
  }
}
SocialFreebsdDevilIcon.install = plugin.install

export default SocialFreebsdDevilIcon
