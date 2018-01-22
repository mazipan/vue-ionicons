<template>
  <div
    class="ion ios-browsers-icon"
    name="ios-browsers-icon"
    aria-labelledby="ios-browsers-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M64 144v304h303.9V144H64z"/><path d="M144 64v64h240v240h64V64z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-browsers-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Browsers Icon"
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

