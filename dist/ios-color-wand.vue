<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-color-wand-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M198.011 159.22l-34.043 34.117L420.064 450 454 415.883zM182 62h32v64h-32zM182 266h32v64h-32zM274 178h64v32h-64zM303.941 112.143l-22.627-22.678-45.254 45.355 22.627 22.678zM92.06 112.143l45.254 45.355 22.627-22.678-45.254-45.355zM92.06 279.141l22.627 22.675 45.254-45.354-22.627-22.678zM58 178h64v32H58z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-color-wand-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Color Wand Icon"
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


