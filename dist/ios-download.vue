<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-download-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M264 144v163l54.8-54.7 11.6 11.6-74.4 74.5-74.5-74.5 11.7-11.6L248 307V144H96v304h320V144zM248 64h16v80h-16z"/></svg>
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


