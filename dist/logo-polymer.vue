<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-polymer-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M392.3 96h-77.9L160.8 348.6 109.9 256l87.7-160h-77.9L32 256l87.7 160h77.9l153.7-252.6 50.8 92.6-87.7 160h77.9L480 256 392.3 96z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-polymer-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Logo Polymer Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

