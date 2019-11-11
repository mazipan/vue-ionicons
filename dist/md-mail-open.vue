<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-mail-open-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M480 201.667c0-14.933-7.469-28.803-20.271-36.266L256 64 52.271 165.401C40.531 172.864 32 186.734 32 201.667v203.666C32 428.802 51.197 448 74.666 448h362.668C460.803 448 480 428.802 480 405.333V201.667zM256 304L84.631 192 256 106.667 427.369 192 256 304z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-mail-open-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Mail Open Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

