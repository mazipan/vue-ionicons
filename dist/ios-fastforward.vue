<template>
  <div class="ion ios-fastforward-icon" name="ios-fastforward-icon" aria-labelledby="ios-fastforward-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 128v123.2L32 128v256l224-123.2V384l224-128-224-128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-fastforward-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Fastforward Icon"
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

