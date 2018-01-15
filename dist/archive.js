import ArchiveIcon from './archive.vue'

const plugin = {
  install: Vue => {
    Vue.component(ArchiveIcon.name, ArchiveIcon)
  }
}
ArchiveIcon.install = plugin.install

export default ArchiveIcon
