<template>
  <div
    class="ion"
    :class="rootClass"
    name="arrow-graph-up-right-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M320 128l61.8 61.8-93.5 98.2-107-106.7L32 384l149.3-128 107 112 130.9-140.8L480 288V128z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-graph-up-right-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Graph Up Right Icon"
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


