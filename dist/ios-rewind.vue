<template>
  <div class="ion ios-rewind-icon" name="ios-rewind-icon" aria-labelledby="ios-rewind-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 128L32 256l224 128V260.8L480 384V128L256 251.2V128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-rewind-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Rewind Icon"
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

