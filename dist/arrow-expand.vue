<template>
  <div
    class="ion arrow-expand-icon"
    name="arrow-expand-icon"
    aria-labelledby="arrow-expand-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M274 209.7l63.9-63.8L288 96h128v128l-49.9-49.9-63.8 63.9zM274 302.3l63.9 63.8L288 416h128V288l-49.9 49.9-63.8-63.9zM238 302.3l-63.9 63.8L224 416H96V288l49.9 49.9 63.8-63.9zM238 209.7l-63.9-63.8L224 96H96v128l49.9-49.9 63.8 63.9z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-expand-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Expand Icon"
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

