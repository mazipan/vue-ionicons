import MusicNoteIcon from './music-note.vue'

const plugin = {
  install: Vue => {
    Vue.component(MusicNoteIcon.name, MusicNoteIcon)
  }
}
MusicNoteIcon.install = plugin.install

export default MusicNoteIcon
