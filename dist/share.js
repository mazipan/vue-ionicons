import ShareIcon from './share.vue'

const plugin = {
  install: Vue => {
    Vue.component(ShareIcon.name, ShareIcon)
  }
}
ShareIcon.install = plugin.install

export default ShareIcon
