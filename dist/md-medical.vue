<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-medical-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M351.9 256L460 193.6l-48-83.2-108 62.4V48h-96v124.8l-108-62.4-48 83.2L160.1 256 52 318.4l48 83.2 108-62.4V464h96V339.2l108 62.4 48-83.2z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-medical-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Medical Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

