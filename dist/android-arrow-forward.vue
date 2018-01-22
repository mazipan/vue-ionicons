<template>
  <div
    class="ion android-arrow-forward-icon"
    name="android-arrow-forward-icon"
    aria-labelledby="android-arrow-forward-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-arrow-forward-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Forward Icon"
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

