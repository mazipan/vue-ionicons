<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-folder-open-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M437.334 144H256.006l-42.668-48H74.666C51.197 96 32 115.198 32 138.667v234.666C32 396.802 51.197 416 74.666 416h362.668C460.803 416 480 396.802 480 373.333V186.667C480 163.198 460.803 144 437.334 144zM448 373.333c0 5.782-4.885 10.667-10.666 10.667H74.666C68.884 384 64 379.115 64 373.333V176h373.334c5.781 0 10.666 4.885 10.666 10.667v186.666z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-folder-open-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Folder Open Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

