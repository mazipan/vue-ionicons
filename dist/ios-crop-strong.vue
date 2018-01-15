<template>
  <div class="ion ios-crop-strong-icon" name="ios-crop-strong-icon" aria-labelledby="ios-crop-strong-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M128 64h32v48h-32zM160 352V176h-32v208h208v-32zM400 352h48v32h-48z"/><path d="M64 128v32h288v288h32V128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-crop-strong-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Crop Strong Icon"
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

