<template>
  <div
    class="ion ios-fastforward-icon"
    name="ios-fastforward-icon"
    aria-labelledby="ios-fastforward-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 128v123.2L32 128v256l224-123.2V384l224-128-224-128z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-fastforward-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Fastforward Icon"
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

