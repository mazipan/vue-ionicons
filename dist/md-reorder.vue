<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-reorder-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M96 348h320v36H96zm0-220h320v36H96zm0 72.7h320v35.6H96zm0 75.1h320v35.6H96z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-reorder-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Reorder Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

