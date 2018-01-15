import PaintbrushIcon from './paintbrush.vue'

const plugin = {
  install: Vue => {
    Vue.component(PaintbrushIcon.name, PaintbrushIcon)
  }
}
PaintbrushIcon.install = plugin.install

export default PaintbrushIcon
