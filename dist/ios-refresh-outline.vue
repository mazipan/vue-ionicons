<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-refresh-outline-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M364.1 256c0 60-48.5 108.2-108.1 108.2S147.9 315.7 147.9 256c0-59.6 48.5-108.1 108.1-108.1v55.8l96-55.7-96-64v44c-70.7 0-128 57.4-128 128.1 0 70.8 57.3 128.1 128 128.1s128-57.1 128-128.1h-19.9z"/><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-refresh-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Refresh Outline Icon"
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


