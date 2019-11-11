<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-checkbox-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64zm-192 298.667L106.667 256l29.864-29.864 76.802 76.802 162.136-162.136 29.864 29.865-192 192z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-checkbox-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Checkbox Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

