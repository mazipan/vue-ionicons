<template>
  <div
    class="ion ios-plus-empty-icon"
    name="ios-plus-empty-icon"
    aria-labelledby="ios-plus-empty-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M384 265H264v119h-17V265H128v-17h119V128h17v120h120v17z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-plus-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Plus Empty Icon"
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

