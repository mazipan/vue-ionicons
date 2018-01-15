import AndroidDraftsIcon from './android-drafts.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidDraftsIcon.name, AndroidDraftsIcon)
  }
}
AndroidDraftsIcon.install = plugin.install

export default AndroidDraftsIcon
