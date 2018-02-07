<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-code-working-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M446.1 251.6L332 142.7c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7L310 155.9c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l95.8 91.5-95.8 91.5c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l13.8 13.2c1.2 1.1 2.6 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l114.2-109c1.2-1.1 1.9-2.7 1.9-4.3-.1-1.7-.8-3.2-2-4.4zM106.3 256l95.8-91.5c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3l-13.8-13.2c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7l-114.2 109c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l114.2 109c1.2 1.1 2.7 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l13.8-13.2c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L106.3 256z"/><circle cx="256" cy="256" r="22"/><circle cx="192" cy="256" r="22"/><circle cx="320" cy="256" r="22"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-code-working-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Code Working Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

