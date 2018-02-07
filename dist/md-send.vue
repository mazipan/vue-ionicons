<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-send-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-send-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Send Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

