<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-windows-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M480 265H232v179l248 36V265zm-264 0H32v150l184 26.7V265zM480 32L232 67.4V249h248V32zM216 69.7L32 96v153h184V69.7z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-windows-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Logo Windows Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

