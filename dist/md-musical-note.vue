<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-musical-note-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 64v225.1c-12.6-7.3-27.1-11.7-42.7-11.7-47.1 0-85.3 38.2-85.3 85.3s38.2 85.3 85.3 85.3 85.3-38.2 85.3-85.3V149.3H384V64H256z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-musical-note-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Musical Note Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

