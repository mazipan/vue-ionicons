<template>
  <div
    class="ion skip-backward-icon"
    name="skip-backward-icon"
    aria-labelledby="skip-backward-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M75.7 96h8.1c6.7 0 12.2 5 12.2 11.7v113.5L283.1 98.7c2.5-1.7 5.1-2.3 8.1-2.3 8.3 0 15.4 7 15.4 17v63.1l118.5-78.2c2.5-1.7 5-2.3 8.1-2.3 8.3 0 14.9 7.4 14.9 17.4v286c0 10-6.7 16.5-15 16.5-3.1 0-5.4-1.2-8.2-2.9l-118.3-77.6v64c0 10-7.2 16.5-15.5 16.5-3.1 0-5.5-1.2-8.2-2.9L96 290.8v113c0 6.7-5.4 12.2-12.2 12.2h-8.1C69 416 64 410.5 64 403.8V107.7C64 101 68.9 96 75.7 96z" fill="#010101"/></svg>

  </div>
</template>

<script>
  export default {
    name: "skip-backward-icon",
    data () {
      let iconTitle = this.title ? this.title : "Skip Backward Icon"
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

