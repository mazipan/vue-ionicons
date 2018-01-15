import LinkIcon from './link.vue'

const plugin = {
  install: Vue => {
    Vue.component(LinkIcon.name, LinkIcon)
  }
}
LinkIcon.install = plugin.install

export default LinkIcon
