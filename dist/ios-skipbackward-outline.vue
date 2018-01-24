<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-skipbackward-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M96 96v320h79V274.2L416 416V96L175 237.8V96H96zm79.6 160l7.6-4.4L400 124v264L183.1 260.4l-7.5-4.4zM112 112h47v288h-47V112z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-skipbackward-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Skipbackward Outline Icon"
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

<style>
.ion{
  display: inline-block;
}
</style>

