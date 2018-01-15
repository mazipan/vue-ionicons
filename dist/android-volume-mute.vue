<template>
  <div class="ion android-volume-mute-icon" name="android-volume-mute-icon" aria-labelledby="android-volume-mute-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-volume-mute-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Volume Mute Icon"
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

