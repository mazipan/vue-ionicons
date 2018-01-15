<template>
  <div class="ion arrow-graph-up-right-icon" name="arrow-graph-up-right-icon" aria-labelledby="arrow-graph-up-right-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M320 128l61.8 61.8-93.5 98.2-107-106.7L32 384l149.3-128 107 112 130.9-140.8L480 288V128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-graph-up-right-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Graph Up Right Icon"
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

