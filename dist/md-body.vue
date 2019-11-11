<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-body-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zm192 144.1H320V464h-42.7V320h-42.7v144H192V192.1H64v-42.7h384v42.7z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-body-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Body Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

