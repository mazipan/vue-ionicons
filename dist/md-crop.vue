<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-crop-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M352 312.7h37.8V160c0-20.8-17-37.8-37.8-37.8H199.3V160H352v152.7zm-192 33.5V48h-37.8v74.2H48V160h74.2v186.2c0 20.8 17 37.8 37.8 37.8h192v80h37.8v-80H464v-37.8H160z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-crop-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Crop Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

