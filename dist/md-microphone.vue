<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-microphone-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M384 112V84.4c0-29-24.5-52.4-54.8-52.4H182.9C152.5 32 128 55.4 128 84.4V112h152v37H128v43h152v37H128v43h152v37H128v41.8c0 29 24.5 52.2 54.9 52.2H213v77h86v-77h30.2c30.3 0 54.8-23.2 54.8-52.2V309h-56v-37h56v-43h-56v-37h56v-43h-56v-37h56z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-microphone-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Microphone Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

