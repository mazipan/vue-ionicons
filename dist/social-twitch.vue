<template>
  <div
    class="ion"
    :class="rootClass"
    name="social-twitch-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32H80zm176 240h-48V143h48v129zm112 0h-48V143h48v129z"/></svg>
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
      },
      rootClass: {
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


