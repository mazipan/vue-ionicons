<template>
  <div class="ion android-arrow-down-icon" name="android-arrow-down-icon" aria-labelledby="android-arrow-down-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-arrow-down-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Down Icon"
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

