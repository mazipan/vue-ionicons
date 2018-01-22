<template>
  <div
    class="ion ios-arrow-down-icon"
    name="ios-arrow-down-icon"
    aria-labelledby="ios-arrow-down-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M396.6 160l19.4 20.7L256 352 96 180.7l19.3-20.7L256 310.5z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-arrow-down-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Arrow Down Icon"
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

