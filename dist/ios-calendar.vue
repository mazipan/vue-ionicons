<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-calendar-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M424 96h-40v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H160v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H88c-22 0-40 18-40 40v272c0 22 18 40 40 40h336c22 0 40-18 40-40V136c0-22-18-40-40-40zm8 300c0 11-9 20-20 20H100c-11 0-20-9-20-20V216c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8v180zM160 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72zm224 0c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-calendar-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Calendar Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

