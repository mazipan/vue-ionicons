<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-water-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M380.5 163.3L256 32 131.5 163.3c-68.6 72.4-68.6 190 0 262.4C165.8 461.9 210.9 480 256 480s90.2-18.1 124.5-54.3c68.7-72.4 68.7-190 0-262.4z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-water-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Water Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

