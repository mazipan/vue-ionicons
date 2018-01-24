<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-drag-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M80 304h352v16H80zM80 248h352v16H80zM80 192h352v16H80z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-drag-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Drag Icon"
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


