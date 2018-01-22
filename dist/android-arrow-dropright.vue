<template>
  <div
    class="ion android-arrow-dropright-icon"
    name="android-arrow-dropright-icon"
    aria-labelledby="android-arrow-dropright-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M192 128l128 128-128 128z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-arrow-dropright-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Dropright Icon"
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

