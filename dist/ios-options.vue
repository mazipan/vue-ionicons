<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-options-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M299.3 376c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16h-75.3c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h235.3zm-160-136c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16H212.7c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h75.3zm160-136c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16h-75.3c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h235.3z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-options-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Options Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

