<template>
  <div class="ion ios-home-icon" name="ios-home-icon" aria-labelledby="ios-home-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 112L96 240v208h112V320h96v128h112V240L256 112z"/><path d="M256 64l-96 76.8V96H96v95.999l-32 25.499 11.51 11.384L256 84.49l180.49 144.393L448 217.498 256 64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-home-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Home Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

