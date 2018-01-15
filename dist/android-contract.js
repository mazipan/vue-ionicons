import AndroidContractIcon from './android-contract.vue'

const plugin = {
  install: Vue => {
    Vue.component(AndroidContractIcon.name, AndroidContractIcon)
  }
}
AndroidContractIcon.install = plugin.install

export default AndroidContractIcon
