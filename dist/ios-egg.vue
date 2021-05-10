<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="ios-egg-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 32C192 32 96 165.2 96 288.9 96 412.6 160 480 256 480s160-67.4 160-191.1C416 165.2 320 32 256 32z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="ios-egg-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 32C192 32 96 165.2 96 288.9 96 412.6 160 480 256 480s160-67.4 160-191.1C416 165.2 320 32 256 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-egg-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : null
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

