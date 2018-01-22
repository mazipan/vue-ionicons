<template>
  <div
    class="ion ios-more-icon"
    name="ios-more-icon"
    aria-labelledby="ios-more-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM128.4 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.4-32-32-32zM384 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-more-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios More Icon"
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

