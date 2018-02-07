<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-pause-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M199.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8zm176 0h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-pause-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Pause Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

