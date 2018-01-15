import AndroidArrowDropleftIcon from './android-arrow-dropleft.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidArrowDropleftIcon.name, AndroidArrowDropleftIcon)
  }
}
AndroidArrowDropleftIcon.install = plugin.install

export default AndroidArrowDropleftIcon
