<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-navigate-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 64L96 433.062 110.938 448 256 384l145.062 64L416 433.062z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-navigate-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Navigate Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

