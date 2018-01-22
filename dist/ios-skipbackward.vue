<template>
  <div
    class="ion ios-skipbackward-icon"
    name="ios-skipbackward-icon"
    aria-labelledby="ios-skipbackward-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M96 96v320h79V274.2L416 416V96L175 237.8V96H96z"/></svg>

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

