import SocialDesignernewsOutlineIcon from './social-designernews-outline.vue'

const plugin = {
  install: Vue => {
    Vue.component(SocialDesignernewsOutlineIcon.name, SocialDesignernewsOutlineIcon)
  }
}
SocialDesignernewsOutlineIcon.install = plugin.install

export default SocialDesignernewsOutlineIcon
