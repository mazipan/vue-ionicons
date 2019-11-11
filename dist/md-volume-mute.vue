<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-volume-mute-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-volume-mute-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Volume Mute Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

