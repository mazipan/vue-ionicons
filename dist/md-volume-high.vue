<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-volume-high-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256zM298.667 64v44.978C360.531 127.632 405.334 186.882 405.334 256c0 69.119-44.803 128.369-106.667 147.022V448C384 428.254 448 349.257 448 256c0-93.256-64-172.254-149.333-192z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-volume-high-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Volume High Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

