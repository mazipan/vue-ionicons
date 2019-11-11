<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-list-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M80 280h256v48H80zM80 184h320v48H80zM80 88h352v48H80z"/><g><path d="M80 376h288v48H80z"/></g></svg>
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

