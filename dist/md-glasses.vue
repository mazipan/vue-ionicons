<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-glasses-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M480 176H272v.1h-32v-.1H32v48h11l5 21.5C64 313 88.5 336 144 336s96-17.4 96-90.5V224s1.5-16 16-16 16 16 16 16v21.8c0 73 42.1 90.2 97 90.2s79-25 95-90.2l5-21.8h11v-48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-glasses-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Glasses Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

