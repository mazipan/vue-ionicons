import PullRequestIcon from './pull-request.vue'

const plugin = {
  install: Vue => {
    Vue.component(PullRequestIcon.name, PullRequestIcon)
  }
}
PullRequestIcon.install = plugin.install

export default PullRequestIcon
