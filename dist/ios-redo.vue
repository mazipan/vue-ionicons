<template>
  <div
    class="ion ios-redo-icon"
    name="ios-redo-icon"
    aria-labelledby="ios-redo-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M64 400h10.3l19.2-31.2c20.5-32.7 44.9-62.8 75.8-76.6 24.4-10.9 46.7-18.9 86.7-20V352l192-128L256 96v80.3c-63 2.8-108.1 20.7-143.3 56.2C60.4 285.2 64 351.5 64 368.2c.1 8.9 0 21.7 0 31.8z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-redo-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Redo Icon"
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

