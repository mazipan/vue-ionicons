<template>
  <div class="ion arrow-graph-up-left-icon" name="arrow-graph-up-left-icon" aria-labelledby="arrow-graph-up-left-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M192 128l-61.8 61.8 93.5 98.2 107-106.7L480 384 330.7 256l-107 112L92.8 227.2 32 288V128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-graph-up-left-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Graph Up Left Icon"
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

