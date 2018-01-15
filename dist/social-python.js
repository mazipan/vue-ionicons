import SocialPythonIcon from './social-python.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialPythonIcon.name, SocialPythonIcon)
  }
}
SocialPythonIcon.install = plugin.install

export default SocialPythonIcon
