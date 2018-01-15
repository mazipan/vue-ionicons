<template>
  <div class="ion android-close-icon" name="android-close-icon" aria-labelledby="android-close-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-close-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Close Icon"
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

