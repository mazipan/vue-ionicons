<template>
  <div class="ion android-done-icon" name="android-done-icon" aria-labelledby="android-done-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-done-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Done Icon"
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

