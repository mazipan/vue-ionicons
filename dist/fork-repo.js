import ForkRepoIcon from './fork-repo.vue'

const plugin = {
  install: Vue => {
    Vue.component(ForkRepoIcon.name, ForkRepoIcon)
  }
}
ForkRepoIcon.install = plugin.install

export default ForkRepoIcon
