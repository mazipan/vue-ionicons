<template>
  <div class="ion ios-pause-outline-icon" name="ios-pause-outline-icon" aria-labelledby="ios-pause-outline-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M191 112v288h-47V112h47m16-16h-79v320h79V96zM368 112v288h-47V112h47m16-16h-79v320h79V96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-pause-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pause Outline Icon"
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

