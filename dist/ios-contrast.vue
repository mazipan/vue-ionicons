<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-contrast-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm127.3 335.3c-34 34-79.2 52.7-127.3 52.7V76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-contrast-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Contrast Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

