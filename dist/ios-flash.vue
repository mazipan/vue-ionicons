<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-flash-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M376.2 224H268l52.4-186.9c.9-4.5-4.6-7.1-7.2-3.4L129.5 274.6c-3.8 5.6-.2 13.4 6.3 13.4H244l-52.4 186.9c-.9 4.5 4.6 7.1 7.2 3.4l183.7-240.8c3.7-5.7.2-13.5-6.3-13.5z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-flash-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Flash Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

