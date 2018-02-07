<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-qr-scanner-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M174 64h-58.8C78.1 64 48 94.1 48 131.2V190c0 7.7 6.3 14 14 14s14-6.3 14-14v-59.8c0-9.1 4.3-18.7 11.7-26.2 7.5-7.6 17.2-12 26.5-12H174c7.7 0 14-6.3 14-14s-6.3-14-14-14zm223.8 0H338c-7.7 0-14 6.3-14 14s6.3 14 14 14h59.8c9.3 0 19 4.4 26.5 12 7.4 7.5 11.7 17.1 11.7 26.2V190c0 7.7 6.3 14 14 14s14-6.3 14-14v-59.8c0-36.5-29.7-66.2-66.2-66.2zM174 420h-59.8c-9.3 0-19-4.4-26.5-12-7.4-7.5-11.7-17.1-11.7-26.2V322c0-7.7-6.3-14-14-14s-14 6.3-14 14v59.8c0 36.5 29.7 66.2 66.2 66.2H174c7.7 0 14-6.3 14-14s-6.3-14-14-14zm276-112c-7.7 0-14 6.3-14 14v59.8c0 9.1-4.3 18.7-11.7 26.2-7.5 7.6-17.2 12-26.5 12H338c-7.7 0-14 6.3-14 14s6.3 14 14 14h58.8c37 0 67.2-30.1 67.2-67.2V322c0-7.7-6.3-14-14-14z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-qr-scanner-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Qr Scanner Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

