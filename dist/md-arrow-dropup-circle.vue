<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-arrow-dropup-circle-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M464 256c0-114.875-93.125-208-208-208S48 141.125 48 256s93.125 208 208 208 208-93.125 208-208zm-112 32H160l96-96 96 96z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-arrow-dropup-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Arrow Dropup Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

