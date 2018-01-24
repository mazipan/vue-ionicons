<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-home-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M256 112L96 240v208h112V320h96v128h112V240L256 112z"/><path d="M256 64l-96 76.8V96H96v95.999l-32 25.499 11.51 11.384L256 84.49l180.49 144.393L448 217.498 256 64z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-home-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Home Icon"
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


