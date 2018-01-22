<template>
  <div
    class="ion volume-low-icon"
    name="volume-low-icon"
    aria-labelledby="volume-low-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M311 407.7V104.4L216.2 192H112v128h104.2zM367.2 355.6c20.5-27.8 32.8-62.3 32.8-99.6 0-37.4-12.3-71.8-32.8-99.6l-20.4 15.3c17.4 23.6 27.8 52.7 27.8 84.3 0 31.6-10.4 60.7-27.8 84.3l20.4 15.3z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "volume-low-icon",
    data () {
      let iconTitle = this.title ? this.title : "Volume Low Icon"
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

