<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-close-circle-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-close-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Close Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

