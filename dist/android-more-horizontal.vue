<template>
  <div class="ion android-more-horizontal-icon" name="android-more-horizontal-icon" aria-labelledby="android-more-horizontal-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M136 216c-22.002 0-40 17.998-40 40s17.998 40 40 40 40-17.998 40-40-17.998-40-40-40zm240 0c-22.002 0-40 17.998-40 40s17.998 40 40 40 40-17.998 40-40-17.998-40-40-40zm-120 0c-22.002 0-40 17.998-40 40s17.998 40 40 40 40-17.998 40-40-17.998-40-40-40z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-more-horizontal-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android More Horizontal Icon"
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

