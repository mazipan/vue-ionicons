<template>
  <div class="ion android-phone-landscape-icon" name="android-phone-landscape-icon" aria-labelledby="android-phone-landscape-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M480 358.856V153.143C480 130.512 461.674 112 439.272 112H72.728C50.326 112 32 130.512 32 153.143v205.713C32 381.488 50.326 400 72.728 400h366.545C461.674 400 480 381.488 480 358.856zM112 364V148h288v216H112z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-phone-landscape-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Phone Landscape Icon"
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

