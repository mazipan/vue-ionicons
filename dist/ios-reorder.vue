<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-reorder-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M80 304h352v16H80zm0-56h352v16H80zm0-56h352v16H80z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-reorder-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Reorder Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

