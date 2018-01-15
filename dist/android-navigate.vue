<template>
  <div class="ion android-navigate-icon" name="android-navigate-icon" aria-labelledby="android-navigate-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 64L96 433.062 110.938 448 256 384l145.062 64L416 433.062z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-navigate-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Navigate Icon"
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

