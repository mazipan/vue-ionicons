<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-alert-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 48C141.6 48 48 141.601 48 256s93.6 208 208 208 208-93.601 208-208S370.4 48 256 48zm24 312h-48v-40h48v40zm0-88h-48V144h48v128z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-alert-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Alert Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

