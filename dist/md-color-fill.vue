<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-color-fill-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M136.5 77.7l37 67L32 285.7 216.4 464l152.4-148.6 54.4-11.4L166.4 48l-29.9 29.7zm184 208H114.9l102.8-102.3 102.8 102.3zM423.3 304s-56.7 61.5-56.7 92.1c0 30.7 25.4 55.5 56.7 55.5 31.3 0 56.7-24.9 56.7-55.5S423.3 304 423.3 304z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-color-fill-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Color Fill Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

