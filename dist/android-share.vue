<template>
  <div class="ion android-share-icon" name="android-share-icon" aria-labelledby="android-share-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-share-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Share Icon"
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

