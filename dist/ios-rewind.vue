<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-rewind-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M256 128L32 256l224 128V260.8L480 384V128L256 251.2V128z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-rewind-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Rewind Icon"
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


