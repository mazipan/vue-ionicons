<template>
  <div
    class="ion"
    :class="rootClass"
    name="social-windows-outline-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" id="Layer_1" :width="w" :height="h"><path class="st0" d="M464 281v180.5l-216-31.3V281h216m16-16H232v179l248 36V265zM200 281v142.2l-152-22V281h152m16-16H32v150l184 26.7V265zM464 50v183H248V81.3l216-30.9M480 32L232 67.4V249h248V32zM200 88v145H48V109.9l152-21.7m16-18.5L32 96v153h184V69.7z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "social-windows-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Windows Outline Icon"
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


