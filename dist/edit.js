import EditIcon from './edit.vue'

const plugin = {
  install: Vue => {
    Vue.component(EditIcon.name, EditIcon)
  }
}
EditIcon.install = plugin.install

export default EditIcon
