<template>
  <div class="ion ios-videocam-icon" name="ios-videocam-icon" aria-labelledby="ios-videocam-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M303.7 128h-221C63.9 128 47 142.1 47 160.7v187.9c0 18.6 16.9 35.4 35.7 35.4h221c18.8 0 33.3-16.8 33.3-35.4V160.7c0-18.6-14.5-32.7-33.3-32.7zM367 213v85.6l98 53.4V160l-98 53z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-videocam-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Videocam Icon"
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

