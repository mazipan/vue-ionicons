<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-reorder-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M96 348h320v36H96zM96 128h320v36H96zM96 200.7h320v35.6H96zM96 275.8h320v35.6H96z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-reorder-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M96 348h320v36H96zM96 128h320v36H96zM96 200.7h320v35.6H96zM96 275.8h320v35.6H96z"/></svg>
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
    let iconTitle = this.title ? this.title : null
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

