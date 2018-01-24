<template>
  <div
    class="ion"
    :class="rootClass"
    name="social-windows-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" id="Layer_1" :width="w" :height="h"><path class="st0" d="M480 265H232v179l248 36V265zM216 265H32v150l184 26.7V265zM480 32L232 67.4V249h248V32zM216 69.7L32 96v153h184V69.7z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "social-windows-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Windows Icon"
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


