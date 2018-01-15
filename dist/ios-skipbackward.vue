<template>
  <div class="ion ios-skipbackward-icon" name="ios-skipbackward-icon" aria-labelledby="ios-skipbackward-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M96 96v320h79V274.2L416 416V96L175 237.8V96H96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-skipbackward-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Skipbackward Icon"
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

