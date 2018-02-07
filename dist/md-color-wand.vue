<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-color-wand-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M200.8 157.2l-36.4 37.4L411.7 448l36.3-37.4zM181 64h37v68h-37zm0 198h37v68h-37zm89-86h69v37h-69zm35.6-60.2l-25.7-26.3-47.1 48.3 25.6 26.2zm-136.8 22l-47.1-48.3-25.6 26.3 47.1 48.2zM96.1 277.9l25.6 26.2 47.1-48.2-25.6-26.3zM64 176h65v37H64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-color-wand-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Color Wand Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

