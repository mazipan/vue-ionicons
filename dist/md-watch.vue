<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-watch-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M416 256c0-51.001-24.004-96.001-60.996-125L336 16H176l-19.004 115C120.004 159.999 96 204.999 96 256c0 50.996 24.004 95.996 60.996 125L176 496h160l19.004-115C391.996 351.996 416 306.996 416 256zm-280 0c0-66.001 54.004-120 120-120s120 53.999 120 120c0 65.996-54.004 120-120 120s-120-54.004-120-120z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-watch-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Watch Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

