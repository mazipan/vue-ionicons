<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-alert-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm17.2 109.6l-3.1 115.1c-.2 8.2-5.9 14.8-14.1 14.8s-13.9-6.6-14.1-14.8l-3.1-115.1c-.2-9.6 7.5-17.6 17.2-17.6 9.6 0 17.4 7.9 17.2 17.6zM256 354c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4c10.7 0 19.1 8.1 19.1 18.4S266.7 354 256 354z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-alert-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Alert Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

