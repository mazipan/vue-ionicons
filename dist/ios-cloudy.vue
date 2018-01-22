<template>
  <div
    class="ion ios-cloudy-icon"
    name="ios-cloudy-icon"
    aria-labelledby="ios-cloudy-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M244 160c-43 0-78.3 35.2-78.3 78.5 0 2.6.1 5.2.4 7.8-26.4 2.3-47.1 25.5-47.1 52.6 0 28.6 23.2 53.1 51.7 53.1h157.7c35.7 0 64.6-29.9 64.6-65.7S364.1 221 328.4 221c-2.7 0-5.4 0-8 .3-7.9-35-39.4-61.3-76.4-61.3z" fill="#010101"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-cloudy-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Cloudy Icon"
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

