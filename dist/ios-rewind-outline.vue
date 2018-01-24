<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-rewind-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M464 155v201.9L280.5 256 464 155m-224 1v200.4L64 256l176-100.2m16-27.8L32 256l224 128V260.8L480 384V128L256 251.2V128z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-rewind-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Rewind Outline Icon"
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

