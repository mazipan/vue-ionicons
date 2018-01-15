import PaintbucketIcon from './paintbucket.vue'

const plugin = {
  install: Vue => {
    Vue.component(PaintbucketIcon.name, PaintbucketIcon)
  }
}
PaintbucketIcon.install = plugin.install

export default PaintbucketIcon
