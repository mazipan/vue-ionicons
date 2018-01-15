import IosMusicalNotesIcon from './ios-musical-notes.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosMusicalNotesIcon.name, IosMusicalNotesIcon)
  }
}
IosMusicalNotesIcon.install = plugin.install

export default IosMusicalNotesIcon
