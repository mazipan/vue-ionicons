<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-battery-full-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M338.2 76.8h-37.4V32h-89.6v44.8h-37.4c-16.4 0-29.8 13.4-29.8 29.8V450c0 16.6 13.4 30 29.8 30H338c16.6 0 30-13.4 30-29.8V106.6c0-16.4-13.4-29.8-29.8-29.8z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-battery-full-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Battery Full Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

