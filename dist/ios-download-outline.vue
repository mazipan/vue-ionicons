<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-download-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M288 144v16h112v272H112V160h112v-16H96v304h320V144z"/><path d="M193.1 252.3l-11.6 11.6 74.5 74.5 74.5-74.5-11.6-11.6-54.7 54.7V64h-16.4v243z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "ios-download-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Download Outline Icon"
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


