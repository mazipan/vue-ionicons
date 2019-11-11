<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-journal-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M92.1 32C76.6 32 64 44.6 64 60.1V452c0 15.5 12.6 28.1 28.1 28.1H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H112.5c-8.2 0-15.4-6-16.4-14.1-1.1-9.7 6.5-18 15.9-18h208V32H92.1z"/><path d="M432 416c8.8 0 16-7.2 16-16V60.1c0-15.5-12.6-28.1-28.1-28.1H368v384h64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-journal-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Journal Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

