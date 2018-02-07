<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-swap-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M388.9 266.3c-5.1-5-5.2-13.3-.1-18.4L436 200H211c-7.2 0-13-5.8-13-13s5.8-13 13-13h224.9l-47.2-47.9c-5-5.1-5-13.3.1-18.4 5.1-5 13.3-5 18.4.1l69 70c1.1 1.2 2.1 2.5 2.7 4.1.7 1.6 1 3.3 1 5 0 3.4-1.3 6.6-3.7 9.1l-69 70c-5 5.2-13.2 5.3-18.3.3zm-265.8 138c5.1-5 5.2-13.3.1-18.4L76.1 338H301c7.2 0 13-5.8 13-13s-5.8-13-13-13H76.1l47.2-47.9c5-5.1 5-13.3-.1-18.4-5.1-5-13.3-5-18.4.1l-69 70c-1.1 1.2-2.1 2.5-2.7 4.1-.7 1.6-1 3.3-1 5 0 3.4 1.3 6.6 3.7 9.1l69 70c5 5.2 13.2 5.3 18.3.3z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-swap-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Swap Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

