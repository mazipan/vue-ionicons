<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-leaf-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M416 287.6C416 120.9 256 32 256 32S96 120.9 96 287.6c0 118.8 81.3 140.5 128 143.2V480h64v-49.3c46.7-2.6 128-24.3 128-143.1z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-leaf-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Leaf Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

