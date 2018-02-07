<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-remove-circle-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224h-181c-8.5 0-16-6-16-16s7.2-16 16-16h181c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-remove-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Remove Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

