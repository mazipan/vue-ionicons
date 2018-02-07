<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-arrow-dropright-circle-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 464c114.875 0 208-93.125 208-208S370.875 48 256 48 48 141.125 48 256s93.125 208 208 208zm-32-112V160l96 96-96 96z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-arrow-dropright-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Arrow Dropright Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

