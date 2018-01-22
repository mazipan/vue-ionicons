<template>
  <div
    class="ion heart-icon"
    name="heart-icon"
    aria-labelledby="heart-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M429.9 95.6c-40.4-42.1-106-42.1-146.4 0L256 124.1l-27.5-28.6c-40.5-42.1-106-42.1-146.4 0-45.5 47.3-45.5 124.1 0 171.4L256 448l173.9-181c45.5-47.3 45.5-124.1 0-171.4z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "heart-icon",
    data () {
      let iconTitle = this.title ? this.title : "Heart Icon"
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

