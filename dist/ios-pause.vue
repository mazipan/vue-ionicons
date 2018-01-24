<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-pause-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M128 96h79v320h-79zM305 96h79v320h-79z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-pause-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Pause Icon"
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


