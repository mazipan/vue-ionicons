<template>
  <div
    class="ion ios-minus-empty-icon"
    name="ios-minus-empty-icon"
    aria-labelledby="ios-minus-empty-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M384 265H128v-17h256v17z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-minus-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Minus Empty Icon"
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

