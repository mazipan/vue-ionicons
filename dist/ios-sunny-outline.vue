<template>
  <div
    class="ion ios-sunny-outline-icon"
    name="ios-sunny-outline-icon"
    aria-labelledby="ios-sunny-outline-icon-title">

    <svg viewBox="0 0 512 512"  id="Layer_1" :width="w" :height="h"><path class="st0" d="M247 96h18v56h-18zM247 356h18v60h-18zM360 247h56v18h-56zM96 247h60v18H96z"/><path transform="rotate(134.999 347.405 341.317)" class="st0" d="M339 317.4h16.8v47.8H339z"/><path transform="rotate(134.999 170.67 164.582)" class="st0" d="M162.2 140.7H179v47.9h-16.8z"/><path transform="rotate(45.001 347.406 164.562)" class="st0" d="M339 140.7h16.8v47.8H339z"/><path transform="rotate(45.009 170.67 341.27)" class="st0" d="M162.2 317.4H179v47.9h-16.8z"/><path class="st0" d="M256 331.8c-41.8 0-75.8-34-75.8-75.8s34-75.8 75.8-75.8 75.8 34 75.8 75.8-34 75.8-75.8 75.8zm0-134.7c-32.5 0-58.9 26.4-58.9 58.9s26.4 58.9 58.9 58.9 58.9-26.4 58.9-58.9-26.4-58.9-58.9-58.9z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-sunny-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Sunny Outline Icon"
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

