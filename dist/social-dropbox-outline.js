import SocialDropboxOutlineIcon from './social-dropbox-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialDropboxOutlineIcon.name, SocialDropboxOutlineIcon)
  }
}
SocialDropboxOutlineIcon.install = plugin.install

export default SocialDropboxOutlineIcon
