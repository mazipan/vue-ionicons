<template>
  <div class="ion android-send-icon" name="android-send-icon" aria-labelledby="android-send-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-send-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Send Icon"
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

