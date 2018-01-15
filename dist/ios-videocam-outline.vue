<template>
  <div class="ion ios-videocam-outline-icon" name="ios-videocam-outline-icon" aria-labelledby="ios-videocam-outline-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M303.7 128h-221C63.9 128 47 142.1 47 160.7v187.9c0 18.6 16.9 35.4 35.7 35.4h221c18.8 0 33.3-16.8 33.3-35.4V160.7c0-18.6-14.5-32.7-33.3-32.7zM320 348.6c0 9.3-6.9 18.4-16.3 18.4h-221c-9.4 0-18.7-9.1-18.7-18.4V160.7c0-9.3 9-15.5 18.4-15.5l221 .1c9.4 0 16.6 6.1 16.6 15.4v187.9zM367 213v85.6l98 53.4V160l-98 53zm81-23v132.3l-64-33.5v-65.6l64.1-33.6-.1.4z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-videocam-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Videocam Outline Icon"
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

