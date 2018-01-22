<template>
  <div
    class="ion ios-fastforward-outline-icon"
    name="ios-fastforward-outline-icon"
    aria-labelledby="ios-fastforward-outline-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M48 155l183.5 101L48 356.9V155m224 .8L448 256 272 356.4V156m-16-28v123.2L32 128v256l224-123.2V384l224-128-224-128z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-fastforward-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Fastforward Outline Icon"
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

