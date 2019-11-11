<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-bookmark-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-bookmark-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Bookmark Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

