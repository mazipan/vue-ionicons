import MinusCircledIcon from './minus-circled.vue'

const plugin = {
  install: Vue => {
    Vue.component(MinusCircledIcon.name, MinusCircledIcon)
  }
}
MinusCircledIcon.install = plugin.install

export default MinusCircledIcon
