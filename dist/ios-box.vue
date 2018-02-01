<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-box-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M112 400h288V208H112v192zm112-160h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zM96 112v80h320v-80z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-box-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Box Icon"
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


