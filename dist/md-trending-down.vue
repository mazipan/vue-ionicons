<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-trending-down-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M480 397V262.5l-51.3 51.3-141.1-141-89.6 89.7L63.6 128 32 159.6l166 166.3 89.6-89.7 109.3 109.4-51.3 51.4H480z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-trending-down-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Trending Down Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

