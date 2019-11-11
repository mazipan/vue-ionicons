<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-photos-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M464 144H128c-17.6 0-32 14.4-32 32v240c0 17.6 14.4 32 32 32h336c17.6 0 32-14.4 32-32V176c0-17.6-14.4-32-32-32z"/><path d="M100 116h332V96c0-17.6-14.4-32-32-32H48c-17.6 0-32 14.4-32 32v256c0 17.6 14.4 32 32 32h20V148c0-17.6 14.4-32 32-32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-photos-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Photos Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

