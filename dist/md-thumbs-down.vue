<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-thumbs-down-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M314 64H142c-15.7 0-28.6 9.6-34.2 23.4L50.6 222.8c-1.7 4.4-2.6 9-2.6 14v38.6c0 21.1 17 44.6 37.8 44.6h119.3l-18 81.5-.6 6c0 7.9 3.2 15.1 8.3 20.3l20 20.1L341 320.7c6.8-6.9 11-16.5 11-27.1v-192c0-21.1-17.2-37.6-38-37.6zm86 0h64v224h-64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-thumbs-down-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Thumbs Down Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

