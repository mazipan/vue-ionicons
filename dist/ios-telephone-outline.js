import IosTelephoneOutlineIcon from './ios-telephone-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosTelephoneOutlineIcon.name, IosTelephoneOutlineIcon)
  }
}
IosTelephoneOutlineIcon.install = plugin.install

export default IosTelephoneOutlineIcon
