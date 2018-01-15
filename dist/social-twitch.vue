<template>
  <div class="ion social-twitch-icon" name="social-twitch-icon" aria-labelledby="social-twitch-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32H80zm176 240h-48V143h48v129zm112 0h-48V143h48v129z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "social-twitch-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Twitch Icon"
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

