<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-information-outline-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><circle cx="251.5" cy="172" r="20"/><path d="M272 344V216h-48v8h16v120h-16v8h64v-8z"/><g><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"/></g></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-information-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Information Outline Icon"
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


