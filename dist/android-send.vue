<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-send-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-send-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Send Icon"
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


