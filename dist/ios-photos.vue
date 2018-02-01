<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-photos-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M96 128v320h384V128H96z"/><path d="M416 64H32v320h48V112h336z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-photos-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Photos Icon"
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


