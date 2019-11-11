<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-navigate-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 336V256H128.3L352 160l-96 224z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-navigate-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Navigate Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

