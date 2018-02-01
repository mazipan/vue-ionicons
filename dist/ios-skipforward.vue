<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-skipforward-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M337 96v141.8L96 96v320l241-141.8V416h79V96h-79z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-skipforward-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Skipforward Icon"
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


