<template>
  <div class="ion ios-arrow-right-icon" name="ios-arrow-right-icon" aria-labelledby="ios-arrow-right-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-arrow-right-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Arrow Right Icon"
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

