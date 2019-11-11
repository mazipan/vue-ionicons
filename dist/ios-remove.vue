<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-remove-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M368.5 240h-225c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7h225c8.8 0 16-7.2 16-16s-7.2-16-16-16z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-remove-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Remove Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

