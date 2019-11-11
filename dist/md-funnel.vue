<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-funnel-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M208 400h96v-47.994h-96V400zM32 112v47.994h448V112H32zm80 168.783h288v-49.555H112v49.555z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-funnel-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Funnel Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

