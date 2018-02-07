<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-pint-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M64 48l42.9 379.2c2.6 20.8 20.5 36.8 42.5 36.8h213.3c22 0 39.9-16 42.5-36.8L448 48H64zm327 124.8H121l-9.4-83.2h288.6l-9.2 83.2z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-pint-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Pint Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

