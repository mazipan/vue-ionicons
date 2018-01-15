import ReplyIcon from './reply.vue'

const plugin = {
  install: Vue => {
    Vue.component(ReplyIcon.name, ReplyIcon)
  }
}
ReplyIcon.install = plugin.install

export default ReplyIcon
