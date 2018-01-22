<template>
  <div
    class="ion minus-icon"
    name="minus-icon"
    aria-labelledby="minus-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M64 224h384v64H64z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "minus-icon",
    data () {
      let iconTitle = this.title ? this.title : "Minus Icon"
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

