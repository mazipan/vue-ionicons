<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-skip-forward-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M64 64v384l277.3-192L64 64zm320 0h64v384h-64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-skip-forward-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Skip Forward Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

