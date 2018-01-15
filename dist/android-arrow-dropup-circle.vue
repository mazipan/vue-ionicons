<template>
  <div class="ion android-arrow-dropup-circle-icon" name="android-arrow-dropup-circle-icon" aria-labelledby="android-arrow-dropup-circle-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M464 256c0-114.875-93.125-208-208-208S48 141.125 48 256s93.125 208 208 208 208-93.125 208-208zm-112 32H160l96-96 96 96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-arrow-dropup-circle-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Dropup Circle Icon"
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

