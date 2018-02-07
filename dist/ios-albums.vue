<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-albums-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M460.9 161H51.1C31.8 161 16 176.8 16 196.1V428c0 19.3 15.8 35.1 35.1 35.1H461c19.3 0 35.1-15.8 35.1-35.1V196.1c-.1-19.3-15.9-35.1-35.2-35.1zM434 133H78c-7.7 0-14-6.3-14-14s6.3-14 14-14h356c7.7 0 14 6.3 14 14s-6.3 14-14 14zm-30.8-56H108.8c-7 0-12.8-5.8-12.8-12.8v-2.4c0-7 5.8-12.8 12.8-12.8h294.4c7 0 12.8 5.8 12.8 12.8v2.4c0 7-5.8 12.8-12.8 12.8z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-albums-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Albums Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

