<template>
  <div class="ion android-arrow-dropright-circle-icon" name="android-arrow-dropright-circle-icon" aria-labelledby="android-arrow-dropright-circle-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 464c114.875 0 208-93.125 208-208S370.875 48 256 48 48 141.125 48 256s93.125 208 208 208zm-32-112V160l96 96-96 96z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-arrow-dropright-circle-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Dropright Circle Icon"
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

