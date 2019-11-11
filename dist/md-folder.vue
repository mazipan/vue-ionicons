<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-folder-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M213.338 96H74.666C51.197 96 32 115.198 32 138.667v234.666C32 396.802 51.197 416 74.666 416h362.668C460.803 416 480 396.802 480 373.333V186.667C480 163.198 460.803 144 437.334 144H256.006l-42.668-48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-folder-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Folder Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

