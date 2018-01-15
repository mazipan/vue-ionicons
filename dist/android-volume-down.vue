<template>
  <div class="ion android-volume-down-icon" name="android-volume-down-icon" aria-labelledby="android-volume-down-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-volume-down-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Volume Down Icon"
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

