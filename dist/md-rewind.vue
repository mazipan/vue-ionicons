<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-rewind-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M249.6 402V110L32 256l217.6 146zm12.8-146L480 402V110L262.4 256z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-rewind-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Rewind Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

