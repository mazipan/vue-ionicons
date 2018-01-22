<template>
  <div
    class="ion ios-pause-icon"
    name="ios-pause-icon"
    aria-labelledby="ios-pause-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M128 96h79v320h-79zM305 96h79v320h-79z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-pause-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pause Icon"
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

