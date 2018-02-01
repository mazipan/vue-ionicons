<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-skipbackward-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M96 96v320h79V274.2L416 416V96L175 237.8V96H96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-skipbackward-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Skipbackward Icon"
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


