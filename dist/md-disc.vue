<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-disc-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm0 301.6c-51.8 0-93.6-41.8-93.6-93.6s41.8-93.6 93.6-93.6 93.6 41.8 93.6 93.6-41.8 93.6-93.6 93.6zm0-114.4c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8 20.8-9.4 20.8-20.8-9.4-20.8-20.8-20.8z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-disc-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Disc Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

