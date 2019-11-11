<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-quote-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M96.4 416h77.1l50.9-96.6V96h-160v223.4h77.1L96.4 416zm224 0h77.1l50-96.6V96H288.4v223.4h82l-50 96.6z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-quote-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Quote Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

