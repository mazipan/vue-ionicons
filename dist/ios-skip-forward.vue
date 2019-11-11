<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-skip-forward-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M337 100v137.8L108.1 98.1C102.7 95 96 98.8 96 105v302c0 6.2 6.7 10 12.1 6.9L337 274.2V412c0 2.2 1.8 4 4 4h71c2.2 0 4-1.8 4-4V100c0-2.2-1.8-4-4-4h-71c-2.2 0-4 1.8-4 4z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-skip-forward-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Skip Forward Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

