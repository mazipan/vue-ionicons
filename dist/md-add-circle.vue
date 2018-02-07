<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-add-circle-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-add-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Add Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

