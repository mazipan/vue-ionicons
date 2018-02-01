<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-plus-empty-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M384 265H264v119h-17V265H128v-17h119V128h17v120h120v17z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-plus-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Plus Empty Icon"
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


