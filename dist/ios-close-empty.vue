<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-close-empty-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path fill="#010101" d="M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-close-empty-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Close Empty Icon"
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


