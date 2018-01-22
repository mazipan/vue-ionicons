<template>
  <div
    class="ion social-twitch-outline-icon"
    name="social-twitch-outline-icon"
    aria-labelledby="social-twitch-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32H80zm336 256l-64 64h-96.001L192 416v-64h-80V80h304v208z"/><path d="M320 143h48v129h-48zM208 143h48v129h-48z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "social-twitch-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Twitch Outline Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      w: {
        type: String,
        default: "14px"
      },
      h: {
        type: String,
        default: "14px"
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

