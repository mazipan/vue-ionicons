<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-cellular-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M64 448h384V64L64 448z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-cellular-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Cellular Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

