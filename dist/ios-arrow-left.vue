<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-arrow-left-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-arrow-left-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Arrow Left Icon"
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


