<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-browsers-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M424 64H88c-26.6 0-48 21.6-48 48v288c0 26.4 21.4 48 48 48h336c26.4 0 48-21.6 48-48V112c0-26.4-21.4-48-48-48zm0 336H88V176h336v224z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-browsers-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Browsers Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

