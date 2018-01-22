<template>
  <div
    class="ion ios-play-outline-icon"
    name="ios-play-outline-icon"
    aria-labelledby="ios-play-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M144 124.9L353.8 256 144 387.1V124.9M128 96v320l256-160L128 96z"/></svg>

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

