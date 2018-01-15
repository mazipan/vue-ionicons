<template>
  <div class="ion ios-arrow-down-icon" name="ios-arrow-down-icon" aria-labelledby="ios-arrow-down-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M396.6 160l19.4 20.7L256 352 96 180.7l19.3-20.7L256 310.5z"/></svg>
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
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

