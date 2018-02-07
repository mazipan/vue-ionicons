<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-share-alt-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-share-alt-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Share Alt Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

