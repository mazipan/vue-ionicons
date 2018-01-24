<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-train-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M80 346.666c0 41.604 33.062 74.666 74.667 74.666L128 448v16h256v-16l-26.667-26.668c41.604 0 74.667-33.062 74.667-74.666V133.334C432 58.668 349.864 48 256 48S80 58.668 80 133.334v213.332zM256 376c-22.002 0-40-17.997-40-39.999S233.998 296 256 296s40 17.999 40 40.001S278.002 376 256 376zm128-152H128v-96h256v96z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-train-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Train Icon"
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

