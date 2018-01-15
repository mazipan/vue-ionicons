<template>
  <div class="ion ios-star-icon" name="ios-star-icon" aria-labelledby="ios-star-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M480 207H308.6L256 47.9 203.4 207H32l140.2 97.9L117.6 464 256 365.4 394.4 464l-54.7-159.1L480 207z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-star-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Star Icon"
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

