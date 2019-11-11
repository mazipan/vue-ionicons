<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-yen-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 32h-80L256 253.128 144 32H64l112.368 208H128v48h73.564L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.891-31H384v-48h-48.289L448 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-yen-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Logo Yen Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

