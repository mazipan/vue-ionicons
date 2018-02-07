<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-crop-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M142 64c-7.7 0-14 6.3-14 14v20c0 7.7 6.3 14 14 14s14-6.3 14-14V78c0-7.7-6.3-14-14-14zm14 278V190c0-7.7-6.3-14-14-14s-14 6.3-14 14v166c0 15.5 12.5 28 28 28h166c7.7 0 14-6.3 14-14s-6.3-14-14-14H170c-7.7 0-14-6.3-14-14zm278 14h-20c-7.7 0-14 6.3-14 14s6.3 14 14 14h20c7.7 0 14-6.3 14-14s-6.3-14-14-14z"/><path d="M64 142c0 7.7 6.3 14 14 14h264c7.7 0 14 6.3 14 14v264c0 7.7 6.3 14 14 14s14-6.3 14-14V156c0-15.5-12.5-28-28-28H78c-7.7 0-14 6.3-14 14z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-crop-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Crop Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

