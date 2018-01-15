<template>
  <div class="ion ios-download-icon" name="ios-download-icon" aria-labelledby="ios-download-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M264 144v163l54.8-54.7 11.6 11.6-74.4 74.5-74.5-74.5 11.7-11.6L248 307V144H96v304h320V144zM248 64h16v80h-16z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-download-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Download Icon"
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

