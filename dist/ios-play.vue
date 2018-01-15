<template>
  <div class="ion ios-play-icon" name="ios-play-icon" aria-labelledby="ios-play-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M128 96v320l256-160L128 96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-play-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Play Icon"
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

