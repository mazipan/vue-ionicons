<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-play-circle-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm83.8 211.9l-137.2 83c-2.9 1.8-6.7-.4-6.7-3.9V173c0-3.5 3.7-5.7 6.7-3.9l137.2 83c2.9 1.7 2.9 6.1 0 7.8z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-play-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Play Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

