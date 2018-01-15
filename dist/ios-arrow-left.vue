<template>
  <div class="ion ios-arrow-left-icon" name="ios-arrow-left-icon" aria-labelledby="ios-arrow-left-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-arrow-left-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Arrow Left Icon"
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

