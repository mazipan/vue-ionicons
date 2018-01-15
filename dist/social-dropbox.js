import SocialDropboxIcon from './social-dropbox.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialDropboxIcon.name, SocialDropboxIcon)
  }
}
SocialDropboxIcon.install = plugin.install

export default SocialDropboxIcon
