<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-navigate-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 64L96 433.062 110.938 448 256 384l145.062 64L416 433.062z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-navigate-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Navigate Icon"
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

