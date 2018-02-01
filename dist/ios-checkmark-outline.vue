<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-checkmark-outline-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M340.1 177.3L215.3 303l-47.2-47.2-17.8 17.8 56 56c2.5 2.5 5.9 4.5 8.9 4.5s6.3-2 8.8-4.4l133.7-134.4-17.6-18z"/><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-checkmark-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Checkmark Outline Icon"
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


