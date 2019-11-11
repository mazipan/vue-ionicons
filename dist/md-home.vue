<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-home-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-home-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Home Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

