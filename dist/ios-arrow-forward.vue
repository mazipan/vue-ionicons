<template>
  <div
    class="ion ios-arrow-forward-icon"
    name="ios-arrow-forward-icon"
    aria-labelledby="ios-arrow-forward-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M160 128.4L192.3 96 352 256 192.3 416 160 383.6 287.3 256z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-arrow-forward-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Arrow Forward Icon"
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

