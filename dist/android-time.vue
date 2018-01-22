<template>
  <div
    class="ion android-time-icon"
    name="android-time-icon"
    aria-labelledby="android-time-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path fill-opacity=".9" d="M256 43C137.789 43 43 138.851 43 256s94.789 213 213 213 213-95.851 213-213S373.149 43 256 43zm0 383.4c-93.718 0-170.4-76.683-170.4-170.4S162.282 85.6 256 85.6 426.4 162.282 426.4 256 349.718 426.4 256 426.4z"/><path fill-opacity=".9" d="M266.65 149.5H234.7v127.8l111.825 67.093 15.975-26.625-95.85-56.444z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-time-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Time Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      w: {
        type: String,
        default: "14px"
      },
      h: {
        type: String,
        default: "14px"
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

