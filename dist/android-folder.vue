<template>
  <div class="ion android-folder-icon" name="android-folder-icon" aria-labelledby="android-folder-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M213.338 96H74.666C51.197 96 32 115.198 32 138.667v234.666C32 396.802 51.197 416 74.666 416h362.668C460.803 416 480 396.802 480 373.333V186.667C480 163.198 460.803 144 437.334 144H256.006l-42.668-48z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-folder-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Folder Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

