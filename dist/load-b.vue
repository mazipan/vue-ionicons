<template>
  <div
    class="ion"
    :class="rootClass"
    name="load-b-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M288 160c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v96zM256 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32zM448 224h-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32zM160 224H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32zM346.5 210.7c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l67.9-67.9c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-67.9 67.9zM210.7 301.3c-12.5-12.5-32.8-12.5-45.3 0l-67.9 67.9C85 381.7 85 402 97.5 414.5s32.8 12.5 45.3 0l67.9-67.9c12.5-12.6 12.5-32.8 0-45.3zM414.4 369.1l-67.9-67.9c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l67.9 67.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3zM210.7 165.5l-67.9-67.9c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l67.9 67.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "load-b-icon",
    data () {
      let iconTitle = this.title ? this.title : "Load B Icon"
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


