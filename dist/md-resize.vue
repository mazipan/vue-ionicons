<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-resize-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M297.6 48l64.9 64.9-249.6 249.6L48 297.6V464h166.4l-64.9-64.9 249.6-249.6 64.9 64.9V48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-resize-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Resize Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

