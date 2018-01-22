<template>
  <div
    class="ion android-document-icon"
    name="android-document-icon"
    aria-labelledby="android-document-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-document-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Document Icon"
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

