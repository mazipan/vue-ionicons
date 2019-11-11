<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-play-circle-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm-41.6 301.6V162.4L339.2 256l-124.8 93.6z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-play-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Play Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

