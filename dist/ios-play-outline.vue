<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-play-outline-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M144 124.9L353.8 256 144 387.1V124.9M128 96v320l256-160L128 96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-play-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Play Outline Icon"
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


