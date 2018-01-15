import IosTelephoneIcon from './ios-telephone.vue'

const plugin = {
  install: Vue => {
    Vue.component(IosTelephoneIcon.name, IosTelephoneIcon)
  }
}
IosTelephoneIcon.install = plugin.install

export default IosTelephoneIcon
