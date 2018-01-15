<template>
  <div class="ion ios-skipforward-outline-icon" name="ios-skipforward-outline-icon" aria-labelledby="ios-skipforward-outline-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M337 96v141.8L96 96v320l241-141.8V416h79V96h-79zm-8.1 164.4L112 388V124l216.9 127.6 7.6 4.4-7.6 4.4zM400 400h-47V112h47v288z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-skipforward-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Skipforward Outline Icon"
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

