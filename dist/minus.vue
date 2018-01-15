<template>
  <div class="ion minus-icon" name="minus-icon" aria-labelledby="minus-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M64 224h384v64H64z"/></svg>
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
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

