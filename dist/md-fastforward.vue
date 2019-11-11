<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-fastforward-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M480 256L262.4 110v292L480 256zM32 110v292l217.6-146L32 110z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-fastforward-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Fastforward Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

