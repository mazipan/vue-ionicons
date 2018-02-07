<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-information-circle-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm19 304h-38.2V207.9H275V352zm-19.1-159.8c-11.3 0-20.5-8.6-20.5-20s9.3-19.9 20.5-19.9c11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-information-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Information Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

