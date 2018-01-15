<template>
  <div class="ion android-bookmark-icon" name="android-bookmark-icon" aria-labelledby="android-bookmark-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-bookmark-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Bookmark Icon"
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

