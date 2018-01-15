<template>
  <div class="ion ios-skipforward-icon" name="ios-skipforward-icon" aria-labelledby="ios-skipforward-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M337 96v141.8L96 96v320l241-141.8V416h79V96h-79z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-skipforward-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Skipforward Icon"
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

