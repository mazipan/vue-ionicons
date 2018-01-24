<template>
  <div
    class="ion"
    :class="rootClass"
    name="minus-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M64 224h384v64H64z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "minus-icon",
    data () {
      let iconTitle = this.title ? this.title : "Minus Icon"
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


