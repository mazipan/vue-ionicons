<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-create-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path  d="M64 368v80h80l235.727-235.729-79.999-79.998L64 368zm377.602-217.602c8.531-8.531 8.531-21.334 0-29.865l-50.135-50.135c-8.531-8.531-21.334-8.531-29.865 0l-39.468 39.469 79.999 79.998 39.469-39.467z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-create-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Create Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

