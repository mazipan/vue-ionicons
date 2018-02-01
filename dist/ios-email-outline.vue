<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-email-outline-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M64 128v256h384V128H64zm192 139.9L93.2 144h325.6L256 267.9zM80 368V154.1l115.1 87.6L127 319l2 2 78.9-69.6L256 288l48.1-36.6L383 321l2-2-68.1-77.4L432 154.1V368H80z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-email-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Email Outline Icon"
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


