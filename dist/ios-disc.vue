<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-disc-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 165.8c-49.9 0-90.3 40.4-90.3 90.3s40.4 90.2 90.3 90.2 90.3-40.4 90.3-90.2c0-49.9-40.4-90.3-90.3-90.3zm0 130.6c-22.3 0-40.4-18.1-40.4-40.4s18.1-40.4 40.4-40.4 40.4 18.1 40.4 40.4-18.1 40.4-40.4 40.4z"/><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 322c-63 0-114-51.1-114-114 0-63 51.1-114 114-114s114 51 114 114-51 114-114 114z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-disc-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Disc Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

