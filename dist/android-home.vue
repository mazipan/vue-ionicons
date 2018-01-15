<template>
  <div class="ion android-home-icon" name="android-home-icon" aria-labelledby="android-home-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-home-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Home Icon"
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

