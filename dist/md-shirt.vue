<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-shirt-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M320 64c-11.1 19.1-40.3 32-64 32s-52.9-12.9-64-32L64 96v96l77-16-13 272h256l-13-272 77 16V96L320 64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-shirt-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Shirt Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

