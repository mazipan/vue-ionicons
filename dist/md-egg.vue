<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-egg-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 32C185.6 32 80 165.2 80 288.9S150.4 480 256 480s176-67.4 176-191.1S326.4 32 256 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-egg-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Egg Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

