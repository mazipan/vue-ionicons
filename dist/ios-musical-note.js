import IosMusicalNoteIcon from './ios-musical-note.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMusicalNoteIcon.name, IosMusicalNoteIcon)
  }
}
IosMusicalNoteIcon.install = plugin.install

export default IosMusicalNoteIcon
