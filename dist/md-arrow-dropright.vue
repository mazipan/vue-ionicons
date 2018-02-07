<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-arrow-dropright-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M192 128l128 128-128 128z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-arrow-dropright-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Arrow Dropright Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

