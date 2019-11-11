<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-play-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M96 52v408l320-204L96 52z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-play-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Play Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

