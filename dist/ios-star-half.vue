<template>
  <div class="ion ios-star-half-icon" name="ios-star-half-icon" aria-labelledby="ios-star-half-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M172.248 304.931l-54.677 159.073L256 365.37l138.445 98.634-54.685-159.067L480 207H308.613L256 48.005 203.402 207H32l140.248 97.931zM256 100.75L297 224h131l-108 74.711 42.623 122.481L256 345.257V100.75z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-star-half-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Star Half Icon"
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

