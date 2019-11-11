<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-image-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 405.333V106.667C448 83.198 428.802 64 405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333zM181.333 288l53.334 64 74.666-96 96 128H106.667l74.666-96z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-image-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Image Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

