import ReplyAllIcon from './reply-all.vue'

const plugin = {
  install: Vue => {
    Vue.component(ReplyAllIcon.name, ReplyAllIcon)
  }
}
ReplyAllIcon.install = plugin.install

export default ReplyAllIcon
