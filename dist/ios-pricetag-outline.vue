<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-pricetag-outline-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M464 32H304L48 320l160 160 256-288V32zm-16 152L208.125 456 72.062 320 311.587 48H448v136z"/><path d="M368 160c17.645 0 32-14.355 32-32s-14.355-32-32-32-32 14.355-32 32 14.355 32 32 32zm0-48c8.836 0 16 7.163 16 16s-7.164 16-16 16-16-7.163-16-16 7.164-16 16-16z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-pricetag-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pricetag Outline Icon"
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


