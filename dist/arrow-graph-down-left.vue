<template>
  <div
    class="ion"
    :class="rootClass"
    name="arrow-graph-down-left-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M32 384V224l60.8 60.8L223.7 144l107 112L480 128 330.7 330.7 223.7 224l-93.5 98.2L192 384z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-graph-down-left-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Graph Down Left Icon"
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


