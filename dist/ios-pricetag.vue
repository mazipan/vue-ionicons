<template>
  <div class="ion ios-pricetag-icon" name="ios-pricetag-icon" aria-labelledby="ios-pricetag-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><circle cx="368" cy="128" r="16"/><path d="M304 32L48 320l160 160 256-288V32H304zm64 128c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.355 32-32 32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-pricetag-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pricetag Icon"
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

