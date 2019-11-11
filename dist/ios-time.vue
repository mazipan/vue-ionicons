<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-time-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm14 226c0 7.7-6.3 14-14 14h-96c-7.7 0-14-6.3-14-14s6.3-14 14-14h82V128c0-7.7 6.3-14 14-14s14 6.3 14 14v146z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-time-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Time Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

