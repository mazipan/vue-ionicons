import HeadphoneIcon from './headphone.vue'

const plugin = {
  install: Vue => {
    Vue.component(HeadphoneIcon.name, HeadphoneIcon)
  }
}
HeadphoneIcon.install = plugin.install

export default HeadphoneIcon
