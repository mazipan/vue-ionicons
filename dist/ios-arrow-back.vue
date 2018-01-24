<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-arrow-back-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M352 128.4L319.7 96 160 256l159.7 160 32.3-32.4L224.7 256z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-arrow-back-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Arrow Back Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      rootClass: {
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

