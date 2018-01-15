<template>
  <div class="ion ios-more-outline-icon" name="ios-more-outline-icon" aria-labelledby="ios-more-outline-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 238c9.9 0 18 8.1 18 18s-8.1 18-18 18-18-8.1-18-18 8.1-18 18-18m0-14c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM128.4 238c9.9 0 18 8.1 18 18s-8.1 18-18 18-18-8.1-18-18 8.1-18 18-18m0-14c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.4-32-32-32zM384 238c9.9 0 18 8.1 18 18s-8.1 18-18 18-18-8.1-18-18 8.1-18 18-18m0-14c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-more-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios More Outline Icon"
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

