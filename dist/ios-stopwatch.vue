<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-stopwatch-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M415.9 143.7c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3L413 95.6c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l25.5 25.5zm-331.1 0c3.1 3.1 8.2 3.1 11.3 0l25.5-25.5c3.1-3.1 3.1-8.2 0-11.3l-11.3-11.3c-3.1-3.1-8.2-3.1-11.3 0L73.5 121c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.4z"/><path d="M280 81.5V64c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v17.5C137.3 93.3 64 174.1 64 272c0 106 86 192 192 192s192-86 192-192c0-97.9-73.3-178.7-168-190.5zm-10 219.3V320c0 7.7-6.3 14-14 14s-14-6.3-14-14v-19.2c-10.7-5.2-18-16.1-18-28.8s7.3-23.6 18-28.8V144c0-7.7 6.3-14 14-14s14 6.3 14 14v99.2c10.7 5.2 18 16.1 18 28.8s-7.3 23.6-18 28.8z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-stopwatch-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Stopwatch Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

