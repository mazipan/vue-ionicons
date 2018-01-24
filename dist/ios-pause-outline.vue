<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-pause-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M191 112v288h-47V112h47m16-16h-79v320h79V96zM368 112v288h-47V112h47m16-16h-79v320h79V96z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-pause-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pause Outline Icon"
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

