<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-desktop-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M437.333 32H74.667C51.198 32 32 51.197 32 74.666v282.667C32 380.802 51.198 400 74.667 400h138.666l-42.666 48v32h170.666v-32l-42.666-48h138.666C460.802 400 480 380.802 480 357.333V74.666C480 51.197 460.802 32 437.333 32zm0 288H74.667V74.666h362.666V320z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-desktop-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Desktop Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

