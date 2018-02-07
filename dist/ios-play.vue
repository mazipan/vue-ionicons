<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-play-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-play-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Play Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

