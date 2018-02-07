<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-checkmark-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-checkmark-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Checkmark Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

