import SocialDesignernewsIcon from './social-designernews.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialDesignernewsIcon.name, SocialDesignernewsIcon)
  }
}
SocialDesignernewsIcon.install = plugin.install

export default SocialDesignernewsIcon
