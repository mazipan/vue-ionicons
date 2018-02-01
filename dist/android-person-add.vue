<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-person-add-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M304 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96zM112 224v-64H80v64H16v32h64v64h32v-64h64v-32h-64z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-person-add-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Person Add Icon"
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


