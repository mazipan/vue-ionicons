<template>
  <div
    class="ion android-arrow-dropup-icon"
    name="android-arrow-dropup-icon"
    aria-labelledby="android-arrow-dropup-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M128 320l128-128 128 128z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-arrow-dropup-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Dropup Icon"
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

