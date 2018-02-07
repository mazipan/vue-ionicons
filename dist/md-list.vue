<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-list-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M80 280h256v48H80zm0-96h320v48H80zm0-96h352v48H80zm0 288h288v48H80z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-list-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md List Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

