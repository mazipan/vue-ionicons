import IpodIcon from './ipod.vue'

const plugin = {
  install: Vue => {
    Vue.component(IpodIcon.name, IpodIcon)
  }
}
IpodIcon.install = plugin.install

export default IpodIcon
