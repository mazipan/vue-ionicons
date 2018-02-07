<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-checkbox-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-checkbox-outline-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Checkbox Outline Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

