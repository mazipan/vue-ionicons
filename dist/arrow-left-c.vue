<template>
  <div
    class="ion arrow-left-c-icon"
    name="arrow-left-c-icon"
    aria-labelledby="arrow-left-c-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M189.3 128.4L89 233.4c-6 5.8-9 13.7-9 22.4s3 16.5 9 22.4l100.3 105.4c11.9 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2L184.4 288h217c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32h-217l48.2-50.4c11.9-12.5 11.9-32.7 0-45.2-12-12.5-31.3-12.5-43.3 0z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-left-c-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Left C Icon"
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

