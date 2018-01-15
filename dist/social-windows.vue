<template>
  <div class="ion social-windows-icon" name="social-windows-icon" aria-labelledby="social-windows-icon-title">
    <svg id="Layer_1" width="1em" height="1em" viewBox="0 0 512 512"><style>.st0{fill:#010101}</style><path class="st0" d="M480 265H232v179l248 36V265zM216 265H32v150l184 26.7V265zM480 32L232 67.4V249h248V32zM216 69.7L32 96v153h184V69.7z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "social-windows-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Windows Icon"
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

